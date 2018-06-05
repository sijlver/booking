import React from 'react';
import PropTypes from 'prop-types';

function Field(props) {
    return (
        <input {...props} />
    );
};

Field.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    required: PropTypes.bool,
};

export default Field;