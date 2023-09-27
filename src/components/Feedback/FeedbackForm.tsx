import React, {FC, RefObject, useContext, useEffect, useMemo, useRef, useState,} from "react";
import {Modal} from "../UI/index";
import TextField from "@mui/material/TextField";
import Button from "../UI/Button/Button";
import {FormDTO} from "../../shared/types/types";
import ReCAPTCHA from "react-google-recaptcha";
import {ThemeContext} from "../../contexts/theme-context";
import {createTheme, styled, ThemeProvider} from "@mui/material/styles";
import {getDesignTokens, getInputFieldStyle} from "../../shared/mui-theme";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LangContext} from "../../contexts/lang-context";
import {fetchFeedback, statusFeedback} from "../../store/feedback";

interface Props {
    isShow: boolean;
    isOpenForm: boolean;
    closeFeedbackForm: () => void;
}

const FeedbackForm: FC<Props> = ({
                                     isShow,
                                     closeFeedbackForm,
                                     isOpenForm,
                                 }) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {lang} = useContext(LangContext);
    const {theme} = useContext(ThemeContext);
    const muiTheme = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);
    const [formData, setFormData] = useState<FormDTO>({
        email: "",
        subject: "",
        message: "",
        lang: lang,
    });
    const CssTextField = useMemo(
        () => styled(TextField)(getInputFieldStyle(theme)),
        [theme]
    );

    const [errors, setErrors] = useState<FormDTO>({});
    const [isEmty, setIsEmty] = useState(true);
    const [token, setToken] = useState("");
    const loading = useSelector(statusFeedback);

    useEffect(() => {
        validateValues(formData);
        checkFormValues();
    }, [formData, loading, dispatch]);

    const recaptchaRef: RefObject<any> = useRef(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!Object.keys(errors).length && token.length) {
            dispatch<any>(fetchFeedback({...formData, token}));
            const initialFormData = {
                email: '',
                subject: '',
                message: '',
                lang: lang,
            };
            setFormData(initialFormData)
        }
    };

    const onChangeCaptcha = async () => {
        const token = await recaptchaRef.current.getValue();
        setToken(token);
    };

    const validateValues = (inputValues: FormDTO) => {
        const errors = {} as FormDTO;
        const regEmail = /^[a-zA-Z0-9._-]+@[a-z0-9-]+\.[a-zA-Z]{2,4}$/;
        if (!regEmail.test(inputValues.email) && inputValues.email.length) {
            errors.email = t("formEmailError");
        }
        if (inputValues.subject.length > 150 && inputValues.subject.length) {
            errors.subject = t("formSubjectError");
        }
        if (inputValues.message.length > 300 && inputValues.message.length) {
            errors.message = t("formMessageError");
        }
        return setErrors(errors);
    };

    const isDisabledButton = useMemo(
        () => !Object.keys(errors).length && !token.length,
        [errors, token]
    );

    const checkFormValues = () => {
        let isEmptyFormData = false;
        for (const key in formData) {
            if (key !== "lang") {
                isEmptyFormData = formData.hasOwnProperty(key) && formData[key] === "";
            }
        }
        setIsEmty(isEmptyFormData);
    };

    return (
        <div>
            {isOpenForm && (
                <Modal isShow={isShow} closeModal={closeFeedbackForm}>
                    {loading !== "succeeded" ? (
                        <form onSubmit={handleSubmit} autoComplete="off" className="form">
                            <ThemeProvider theme={muiTheme}>
                                <CssTextField
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    label={t("formLabelEmail")}
                                    onChange={handleChange}
                                    value={formData.email}
                                    fullWidth
                                    required
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    sx={{mb: 4}}
                                />
                                <CssTextField
                                    name="subject"
                                    type="text"
                                    variant="outlined"
                                    label={t("formLabelSubject")}
                                    onChange={handleChange}
                                    value={formData.subject}
                                    fullWidth
                                    required
                                    multiline
                                    rows={4}
                                    error={!!errors.subject}
                                    helperText={errors.subject}
                                    sx={{mb: 4}}
                                />
                                <CssTextField
                                    name="message"
                                    type="text"
                                    variant="outlined"
                                    label={t("formLabelMessage")}
                                    onChange={handleChange}
                                    value={formData.message}
                                    fullWidth
                                    required
                                    multiline
                                    rows={7}
                                    error={!!errors.message}
                                    helperText={errors.message}
                                    sx={{mb: 4}}
                                />
                            </ThemeProvider>
                            {(!isEmty && !Object.keys(errors).length) && (
                                <div className="recapcha">
                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_RECAPCHA_SITE_KEY}
                                        onChange={onChangeCaptcha}
                                        ref={recaptchaRef}
                                        theme={theme}
                                        hl={lang}
                                    />
                                </div>
                            )}

                            <Button
                                onClickButton={handleSubmit}
                                isDisabled={!!isDisabledButton}
                            >
                                {t("formButtonText")}
                            </Button>
                        </form>
                    ) : (
                        <p className="modal-text-center">{t("formMessageSuccessfully")}</p>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default FeedbackForm;