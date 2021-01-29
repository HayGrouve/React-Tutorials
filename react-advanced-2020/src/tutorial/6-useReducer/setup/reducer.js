export const reducer = (state, action) => {
    if (action.type === 'ADD_PERSON') {
        const newPeople = [...state.people, action.payload]
        return {
            ...state,
            people: newPeople,
            isModelOpen: true,
            modelContext: 'Person added!'
        }
    }
    if (action.type === 'REMOVE_PERSON') {
        const newPeople = state.people.filter((person) => person.id !== action.payload)
        return {
            ...state,
            people: newPeople,
            isModelOpen: true,
            modelContext: 'Person removed!'
        }
    }
    if (action.type === 'NO_NAME') {
        return {
            ...state,
            isModelOpen: true,
            modelContext: 'No name provided!'
        }
    }
    if (action.type === 'HIDE_MESSAGE') {
        return {
            ...state,
            isModelOpen: false,
            modelContext: ''
        }
    }
    throw new Error('No matching action type')
}