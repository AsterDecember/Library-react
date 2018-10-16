import React from 'react';
import { ContainerDiv } from './Container.styled';


const Container = (props) => {


    return (
        <ContainerDiv>
            {props.children}
        </ContainerDiv>
    );

};

export default Container;