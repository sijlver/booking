const initialState = {
    listPlayers: [],
};

const listPlayersReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'RECEIVED_LIST_PLAYERS': {
        const { listPlayers } = action.payload;

        return {...state, listPlayers }
    }
    default: {
        return state;
    }
    }
};

export default listPlayersReducer;
