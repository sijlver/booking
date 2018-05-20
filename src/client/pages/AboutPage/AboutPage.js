import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutPage extends Component {
    render() {
        return (
            <p>About Page</p>
        );
    }
}

const mapStateToProps = state => ({
});

const mapActionToProps = dispatch => ({
});

export default connect(mapStateToProps, mapActionToProps)(AboutPage);
