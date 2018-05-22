import { hotelsConstants } from '../constants';

const requestMiddleware = ({ dispatch }) => next => (action) => {
    switch (action.type) {
    case hotelsConstants.REQUEST_LIST_HOTELS: {
        const url = 'http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=en&lookFor=both';

        fetch(url)
            .then((oData) => oData.json())
            .then((oData) => dispatch({ type: hotelsConstants.RECEIVED_HOTELS, payload: { listHotels: oData.results.hotels }}));
    }
    default: {}
    }
    return next(action);
};

export default requestMiddleware;
