import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadAllElements} from '../../actions/allElements';
import ElementTable from '../ElementTable';
import CreateElement from '../CreateElement';
import { ElementBanner } from './ElementView.styled';

class ElementsView extends Component{

    componentDidMount() {
        this.props.loadAllElements();
    }

    render(){
        return (
            <div>
                {/* <CreateElement/> */}
                <ElementBanner>
                    <h1>FCC Library</h1>
                </ElementBanner>
                <ElementTable elemets={this.props.allElements} />
            </div>
        );
    }

}

//Set the main stage to props i need to use on this component(get the reducer state to the component to be able)
const mapStateToProps = (state) => {
    const {
        allElements
    } = state;

    return {
        allElements
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        loadAllElements,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(ElementsView);