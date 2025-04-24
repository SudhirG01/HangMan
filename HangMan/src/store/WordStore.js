import { create } from 'zustand';

const useWordStore = create((set) => ({
    wordList: [],
    word: '',
    setWord: (newWord) => {      // Defining setter of the state manually
        set((state) => {
            return {
                ...state,
                word: newWord
            }
        })
    },
    setWordList: (list) => {
        set((state) => {
            return {
                ...state,
                wordList: list
            }
        })
    }
}))

export default useWordStore;