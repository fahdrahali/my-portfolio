

const validateEmailInput = (input) => {
    if (input !== input.toLowerCase())
        return 'Email address should be in lower case';

    document.getElementById('form').submit();
}



export default validateEmailInput;