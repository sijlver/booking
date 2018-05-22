import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function BusyIndicator(props) {
    const className = props.show ? 'busyIndicator' : '';

    return (
        <span className={className} />
    );
};

BusyIndicator.propTypes = {
    show: PropTypes.bool,
};

export default BusyIndicator;