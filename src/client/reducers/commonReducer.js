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
    case commonConstants.REQUEST_FAILURE: {
        const { requestFailure } = action.payload;

        console.log(requestFailure);
        return state;
    }
    default: {
        return state;
    }
    }
};

export default commonReducer;
