const initialState = {
    showListItems: false,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SHOW_LIST': {
        const { showListItems } = state;

        return {...state, showListItems: !showListItems }
    }
    default: {
        return state;
    }
    }
};

export default loginReducer;
