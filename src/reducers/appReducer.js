import {createStore} from "redux";

const initialState = {
    loading: false,
    error: "",
    classes: [],
    myClassList: [],
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_CLASSES_START":
            return {
                ...state, 
                loading: true,
                error: ""
            };
        
        case "FETCHING_CLASSES_SUCCESS": 
            return {
                ...state, 
                loading: false, 
                classes: action.payload,
            };

        case "FETCHING_CLASSES_FAILURE":
            return {
                ...state, 
                loading: false,
                error: "Classes not found."
            };

        case "ADD_CLASS":
            return {
                ...state,
                classes: [...state.classes, action.payload]
            };

        case "EDIT_CLASS":
            return {
                ...state,

            };

        case "DELETE_CLASS":
            return {
                ...state,
                classes: state.classes.filter(el => {
                    return !(el.id === action.payload.id)
                })
            };

        case "ADD_CLASSLIST":
            return {
                ...state,
                myClassList: [...state.myClassList, action.payload]    
            };

        case "DELETE_CLASSLIST":
            return {
                ...state,
                myClassList: state.myClassList.filter(el => {
                    return !(el.id === action.payload.id)
                })    
            }
        default: 
            return state;
    }
};

export const store = createStore(appReducer);