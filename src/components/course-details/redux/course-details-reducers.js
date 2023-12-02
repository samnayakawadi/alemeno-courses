export const courseDetailsReducers = {
    updateAllData: (prevState, actions) => {
        return { ...prevState, ...actions.payload }
    }
}