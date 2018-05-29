import React from 'react';
import PropTypes from 'prop-types';

function Field(props) {
    return (
        <input {...props} />
    );
};

Field.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Field;