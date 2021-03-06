import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadAllElements} from '../../actions/allElements';
import ElementTable from '../ElementTable/ElementTable';
import Container from '../Container/Container';
// import CreateElement from '../CreateElement/CreateElement';
// import { ElementBanner } from './ElementView.styled';

class ElementsView extends Component{

    componentDidMount() {
        this.props.loadAllElements();
    }

    render(){
        return (
            <div>
                {/* <CreateElement/> */}
                <Container>
                    <ElementTable elemets={this.props.allElements} />
                </Container>
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