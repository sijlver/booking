const requestMiddleware = ({ dispatch }) => next => (action) => {
    switch (action.type) {
    case 'REQUEST_LIST_PLAYERS': {
        const url = 'http://ergast.com/api/f1/drivers.json';

        fetch(url)
            .then((oData) => oData.json())
            .then((oData) => dispatch({ type: 'RECEIVED_LIST_PLAYERS', payload: { listPlayers: oData.MRData.DriverTable.Drivers }}));
    }
    default: {}
    }
    return next(action);
};

export default requestMiddleware;
