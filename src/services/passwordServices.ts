const generatePass = () => {

    let password: string = ''
    let characters: string = 'Aa@$#1234567890abcdefghijFGHIJKLMNOP!'
    const passwordLength = 12

    for(let i = 0; i < passwordLength; i++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}

export default generatePass