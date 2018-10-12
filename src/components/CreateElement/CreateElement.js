import React from 'react';
import ElementList from "../ElementList/ElementList";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createElement} from '../../actions/allElements';

const CreateElement = (props) => {

    const createBook = (e) => {
        console.log(document.getElementById('id').value);
        //let element =
        props.createElement(
            {
                id: document.getElementById('id').value,
                name: document.getElementById('name').value
            });
    }

    return (
        <div>
            <h2>ID</h2>
            <input type="number" id="id" />
            <h2>Name</h2>
            <input type="text" id="name" />
            <hr/>
            <button onClick={createBook}>Create</button>
        </div>
    );
}

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        createElement
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(CreateElement);