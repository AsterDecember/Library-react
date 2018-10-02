import React from 'react';
import ElementList from './ElementList';
import Element from "./Element";

const ElementTable = (props) => {

    const renderElements = () => {
        const elements = props.elemets;
        return elements ? Object.keys(elements).map((element) => <Element element={elements[element]}>Example</Element>)  : <h1>No info</h1>
    }

    return (
        <table>
            {renderElements()}
        </table>
    )
}

export default ElementTable;