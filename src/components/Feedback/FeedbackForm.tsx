import React, {FC, RefObject, useContext, useEffect, useMemo, useRef, useState,} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles";

import {getInputFieldStyle} from "shared/mui-theme";
import {FormDTO} from "shared/types/types";
import {validateEmail, validateTextarea} from "shared/helpers/validate"
import {fetchFeedback, statusFeedback} from "store/feedback";

import Modal from "components/UI/Modal/Modal";
import Button from "components/UI/Button/Button";
import {ThemeContext} from "../../contexts/theme-context";

interface Props {
    isShow: boolean;
    isOpenForm: boolean;
    closeFeedbackForm: () => void;
    lang: string;
}

const FeedbackForm: FC<Props> = ({
                                     isShow,
                                     closeFeedbackForm,
                                     isOpenForm,
                                     lang
                                 }) => {
    const {t} = useTranslation();
    const {theme, setTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<FormDTO>({
        email: "",
        subject: "",
        message: "",
        lang: lang,
    });

    const [errors, setErrors] = useState<FormDTO>({});
    const [isEmpty, setIsEmty] = useState(true);
    const [token, setToken] = useState("");
    const loading = useSelector(statusFeedback);

    useEffect(() => {
        validateValues(formData);
        checkFormValues();
    }, [formData, loading, dispatch]);

    const CssTextField = useMemo(
        () => styled(TextField)(getInputFieldStyle(theme)),
        [theme]
    );

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
        if (validateEmail(inputValues.email)) {
            errors.email = t("formEmailError");
        }
        if (validateTextarea(inputValues.subject, 150)) {
            errors.subject = t("formSubjectError");
        }
        if (validateTextarea(inputValues.subject, 300)) {
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
                    {loading !== "loading" ? (
                        <form onSubmit={handleSubmit} autoComplete="off" className="form">
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
                            {(!isEmpty && !Object.keys(errors).length) && (
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
                            <div className={`theme-${theme}`}>
                                <Button
                                    onClickButton={handleSubmit}
                                    isDisabled={!!isDisabledButton}
                                >
                                    {t("formButtonText")}
                                </Button>
                            </div>

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