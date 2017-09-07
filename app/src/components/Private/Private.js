import React, { Component } from 'react';
import './Private.css';

import { connect } from 'react-redux'; 
import { getUserInfo } from './../../ducks/user_reducer';

class Private extends Component {
    
    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <div>
                <h1>Private</h1>
                <a href = { process.env.REACT_APP_LOGOUT }>
                    <button>Logout</button>
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

let outputActions = {
    getUserInfo: getUserInfo
}

export default connect(mapStateToProps, outputActions)(Private);