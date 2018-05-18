import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        return (
            <p>Home Page</p>
        );
    }
}

const mapStateToProps = state => ({
});

const mapActionToProps = dispatch => ({
});

export default connect(mapStateToProps, mapActionToProps)(HomePage);
