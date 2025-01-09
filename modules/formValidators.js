

const validateInputEmail = (input) => {
    if (input !== input.toLowerCase())
        return 'Email address should be in lower case';
}




export default validateInputEmail;