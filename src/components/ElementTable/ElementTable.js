import React from 'react';
// import ElementList from '../ElementList/ElementList';
// import Element from "../Element/Element";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TH,
    TD,
    TD30,
} from './ElementTable.styled';

const ElementTable = (props) => {

    const renderElements = () => {
        const elements = props.elemets;
        return elements ? Object.keys(elements).map((element) => {
            const el = elements[element]
            return (
                <TableRow key={el.id}>
                    <TD30>{el.id}</TD30>
                    <TD>Elemento</TD>
                </TableRow>
            )
        }) : <h1>No info</h1>
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TH>Id</TH>
                    <TH>Libro</TH>
                </TableRow>
            </TableHead>

            <TableBody>
                {renderElements()}
            </TableBody>
        </Table>
    )
}

export default ElementTable;