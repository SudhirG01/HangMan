export const getMaskedText = (text, guessedLetter) => {
    guessedLetter = guessedLetter.map((char) => char.toUpperCase())
    const guessedLetterSet = new Set (guessedLetter)

    const result = text.toUpperCase().split('').map((char) => {
        if(guessedLetterSet.has(char))
            return char;
        else
            return '_'
    })

    return result
}
