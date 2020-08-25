import axiosWithAuth from "../utils/axiosWithAuth"

export const EDIT_STORY = "EDIT_STORY"
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const EDIT_FAIL = "EDIT_FAIL"

const editStory = editedStory => dispatch => {
    dispatch({ type: EDIT_STORY })

    axiosWithAuth()
    .put('https://reqres.in/api/users', editedStory)
    .then(res => {
        console.log(res.data)
        dispatch({ type: EDIT_SUCCESS, payload: res.data })
    })
    .catch(res => {
        console.error("API call to edit failed within editStory.js")
        dispatch({ type: EDIT_FAIL, payload: res.data})
    })
}