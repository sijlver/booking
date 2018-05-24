import { commonConstants } from '../constants';

const initialState = {
    busyIndicator: false,
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
    case commonConstants.BUSY_INDICATOR: {
        const { busyIndicator } = action.payload;

        return {...state, busyIndicator };
    }
    default: {
        return state;
    }
    }
};

export default commonReducer;
