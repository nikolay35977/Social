export const required = (value) => {
    if (value) {
        return undefined
    }
    return 'Field is required'
}

export const maxLength50 = (value) => {
    if (value && value.length > 50) {
        return `Max length is ${50} symbols`;
    }
    return undefined;
} 