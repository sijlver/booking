import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hotelsActions } from '../../../actions';
import { Field } from '../../../components';

class FilterPanel extends Component {
    state = {
        cityName: '',
    }
    submitSearchHotels = (e) => {
        e.preventDefault();
        const { requestListHotels } = this.props;
        const { cityName } = this.state;

        this.setState({ cityName: '' });
        requestListHotels(cityName);
    }
    onChange = (e) => {
        const { target: { name, value } } = e;

        this.setState({ [name]: value });
    }
    render() {
        return (
            <form onSubmit={this.submitSearchHotels}>
                <Field
                    name='cityName'
                    value={this.state.cityName}
                    onChange={this.onChange}
                />
                <button type='submit'>search</button>
            </form>
        );
    }
}

FilterPanel.propTypes = {
    requestListHotels: PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapActionToProps = dispatch => ({
    requestListHotels(city) {
        dispatch(hotelsActions.getListHotels(city));
    },
});

export default connect(mapStateToProps, mapActionToProps)(FilterPanel);
