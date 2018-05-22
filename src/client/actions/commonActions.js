import { commonConstants } from '../constants';

function setBusyIndicator(busyIndicator) {
    return { type: commonConstants.BUSY_INDICATOR, payload: { busyIndicator } };
};

function requestFailure(requestFailure) {
    return { type: commonConstants.REQUEST_FAILURE, payload: { requestFailure } };
};

export { setBusyIndicator, requestFailure };
