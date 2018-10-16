import React from 'react';
import {
    NavBarContainer,
    NavBarWrapper,
    NavBarTitle,
    NavBarList,
    NavBarListItem,
    NavBarLink,
} from './NavBar.styled';

const NavBar = (props) => {

    return (
        <NavBarContainer>
            <NavBarWrapper>
                
                <NavBarTitle>
                    Libreria
                </NavBarTitle>

                <NavBarList>
                    <NavBarListItem>
                        <NavBarLink><i className="fas fa-plus"></i> Agregar Libro</NavBarLink>
                    </NavBarListItem>
                </NavBarList>

            </NavBarWrapper>
        </NavBarContainer>
    );
}

export default NavBar;