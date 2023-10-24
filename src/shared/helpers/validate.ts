const validateEmail = (value: string) => {
    const regEmail = /^[a-zA-Z0-9._-]+@[a-z0-9-]+\.[a-zA-Z]{2,4}$/;
    return !regEmail.test(value) && value.length
};

const validateTextarea = (value: string, length: number) => {
    return value.length > length && value.length
}

export {validateEmail, validateTextarea}