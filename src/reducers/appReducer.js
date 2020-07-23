const initialState = {
    loading: false,
    error: "",
    classes: [],
    class: {
        name: "",
        type: "",
        startTime: "",
        duration: "",
        intensity: "",
        location: "",
        numRegistered: "",
        maxClassSize: "",
    },
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
            }
        case "EDIT_CLASS":
            return {
                ...state,
                
            }
        case "DELETE_CLASS":
            return {
                ...state,
                
            }
        case "ADD_CLASSLIST":
            return {
                ...state,
                
            }
        case "DELETE_CLASSLIST":
            return {
                ...state,
                
            }
        default: 
            return state;
    }
};