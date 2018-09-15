import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadAllElements} from '../actions/allElements';
import ElementTable from './ElementTable';

class ElementsView extends Component{

    componentDidMount() {
        this.props.loadAllElements();
    }

    render(){
        return (
            <div>
                <h4>Main Component View!</h4>
                <ElementTable/>
            </div>
        );
    }

}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        allGifs,
        searchGifs
    } = state;

    return {
        allGifs,
        searchGifs
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        loadAllElements,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(ElementsView);