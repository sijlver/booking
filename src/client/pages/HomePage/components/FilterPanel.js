import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Field } from '../../../components';
import helperFunction from '../../../utils';

class FilterPanel extends Component {
    state = {
        searchName: '',
        dateStart: '',
        dateEnd: '',
        limit: '',
        minStartDate: helperFunction.changeFormatDate(new Date()),
        minEndDate: helperFunction.changeFormatDate(new Date(), 1),
    }
    componentWillMount() {
        const {
            searchName, dateStart, dateEnd, limit,
        } = this.props;

        this.setState({
            searchName, dateStart, dateEnd, limit,
        });
    }
    submitSearchHotels = (e) => {
        e.preventDefault();
        const { requestListHotels } = this.props;
        const {
            searchName, dateStart, dateEnd, limit,
        } = this.state;

        requestListHotels(searchName, dateStart, dateEnd, limit);
    }
    onChange = (e) => {
        const { target: { name, value } } = e;
        const changeState = { [name]: value };

        if (name === 'dateStart') {
            changeState.minEndDate = helperFunction.changeFormatDate(new Date(value), 1);
        }
        this.setState(changeState);
    }
    render() {
        const {
            searchName, dateStart, dateEnd, minStartDate, minEndDate, limit,
        } = this.state;

        return (
            <form onSubmit={this.submitSearchHotels} className='filterPanel'>
                <Field
                    name='searchName'
                    value={searchName}
                    onChange={this.onChange}
                    className='searchField'
                    required
                />
                <Field
                    type='date'
                    name='dateStart'
                    min={minStartDate}
                    value={dateStart}
                    onChange={this.onChange}
                    className='startDateField'
                />
                <Field
                    type='date'
                    name='dateEnd'
                    min={minEndDate}
                    value={dateEnd}
                    onChange={this.onChange}
                    className='endDateField'
                />
                <Field
                    type='number'
                    name='limit'
                    min='1'
                    max='10'
                    value={limit}
                    onChange={this.onChange}
                />
                <button type='submit' className='searchButton'>search</button>
            </form>
        );
    }
}

FilterPanel.propTypes = {
    requestListHotels: PropTypes.func,
    searchName: PropTypes.string,
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
    limit: PropTypes.string,
};

export default FilterPanel;
