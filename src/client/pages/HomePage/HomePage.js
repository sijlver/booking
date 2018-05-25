import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilterPanel from './components/FilterPanel';
import ListHotels from './components/ListHotels';
import { BusyIndicator } from '../../components';
import { hotelsActions } from '../../actions';
import './styles.css';

function HomePage(props) {
    const { busyIndicator, listHotels, requestListHotels, searchName, dateStart, dateEnd, limit } = props;

    return (
        <div className='mainContent'>
            <FilterPanel
                requestListHotels={requestListHotels}
                searchName={searchName}
                dateStart={dateStart}
                dateEnd={dateEnd}
                limit={limit}
            />
            <ListHotels listHotels={listHotels} />
            <BusyIndicator show={busyIndicator} />
        </div>
    );
}

HomePage.propTypes = {
    listHotels: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    searchName: PropTypes.string,
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
    limit: PropTypes.string,
    busyIndicator: PropTypes.bool,
    requestListHotels: PropTypes.func,
};

const mapStateToProps = state => ({
    searchName: state.hotelsReducer.searchName,
    dateStart: state.hotelsReducer.dateStart,
    dateEnd: state.hotelsReducer.dateEnd,
    limit: state.hotelsReducer.limit,
    listHotels: state.hotelsReducer.listHotels,
    busyIndicator: state.commonReducer.busyIndicator,
});

const mapActionToProps = dispatch => ({
    requestListHotels(city, dateStart, dateEnd, limit) {
        dispatch(hotelsActions.getListHotels(city, dateStart, dateEnd, limit));
    },
});

export default connect(mapStateToProps, mapActionToProps)(HomePage);
