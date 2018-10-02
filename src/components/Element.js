import React from 'react';

const Element = (props)=> {
    return(
        <tr>
            <th>{props.element.id}</th>
            <th>Elemento</th>
        </tr>
    )
}

export default Element;