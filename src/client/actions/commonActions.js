// @flow
import { commonConstants } from '../constants';

type TypesResultSetBusyIndicator = {
    type: string,
    payload: {
        busyIndicator: boolean,
    },
};

function setBusyIndicator(busyIndicator: boolean): TypesResultSetBusyIndicator {
    return { type: commonConstants.BUSY_INDICATOR, payload: { busyIndicator } };
}

export { setBusyIndicator };
