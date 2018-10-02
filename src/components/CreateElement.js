import React from 'react';
import ElementList from "./ElementList";

const CreateElement = (props) => {

    const createBook = (e) => {
        console.log(e.target.value)
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

export default CreateElement;