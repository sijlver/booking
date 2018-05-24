import { commonConstants } from '../constants';

function setBusyIndicator(busyIndicator) {
    return { type: commonConstants.BUSY_INDICATOR, payload: { busyIndicator } };
};

export { setBusyIndicator };
