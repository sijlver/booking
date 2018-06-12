import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import 'isomorphic-fetch';

import { getListHotels, getHotelInformation, receivedListHotels, receivedHotelInformation, changeFilterNames } from './hotelsActions';
import { setBusyIndicator } from './commonActions';
import { hotelsConstants } from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('hotelsActions', () => {
    it('receivedListHotels function', () => {
        const listHotels = [{ id: '4392297', label: 'Search-Me-Heart', locationName: 'Port Antonio, Jamaica' }];
        const action = {
            type: hotelsConstants.RECEIVED_HOTELS,
            payload: { listHotels },
        };

        expect(receivedListHotels(listHotels)).toEqual(action);
    });
    it('receivedHotelInformation function', () => {
        const hotelInformation = {};
        const action = {
            type: hotelsConstants.RECEIVED_HOTEL,
            payload: { hotelInformation },
        };

        expect(receivedHotelInformation(hotelInformation)).toEqual(action);
    });
    it('changeFilterNames function', () => {
        const searchName = 'search name';
        const dateStart = '2018-05-9';
        const dateEnd = '2018-05-10';
        const limit = '10';
        const action = {
            type: hotelsConstants.CHANGE_FILTER_NAMES,
            payload: {
                searchName, dateStart, dateEnd, limit,
            },
        };

        expect(changeFilterNames(searchName, dateStart, dateEnd, limit)).toEqual(action);
    });
    it('getListHotels function', () => {
        const searchName = 'searchName';
        const dateStart = '2018-05-9';
        const dateEnd = '2018-05-10';
        const limit = '10';
        const store = mockStore({});

        store.dispatch(getListHotels(searchName, dateStart, dateEnd, limit));
        expect(store.getActions()[0]).toEqual(setBusyIndicator(true));
        expect(store.getActions()[1]).toEqual(changeFilterNames(searchName, dateStart, dateEnd, limit));
    });
    it('getHotelInformation function', () => {
        const id = '1';
        const store = mockStore({});

        store.dispatch(getHotelInformation(id));
        expect(store.getActions()[0]).toEqual(setBusyIndicator(true));
    });
});
