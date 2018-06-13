// @flow
import { commonConstants } from '../constants';

type TypesStateCommonReducer = {
    busyIndicator: boolean,
};

type TypesActionCommonReducer = {
    type: string,
    payload: {
        busyIndicator: boolean,
    },
};

const initialState = {
    busyIndicator: false,
};

const commonReducer = (state: TypesStateCommonReducer = initialState, action: TypesActionCommonReducer): TypesStateCommonReducer => {
    switch (action.type) {
    case commonConstants.BUSY_INDICATOR: {
        const { busyIndicator } = action.payload;

        return { ...state, busyIndicator };
    }
    default: {
        return state;
    }
    }
};

export default commonReducer;
