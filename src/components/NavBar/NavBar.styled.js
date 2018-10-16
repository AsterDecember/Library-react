import styled from 'styled-components';

const NavBarContainer = styled.nav`
    height: 64px;
    line-height: 64px;
    background-color: #3B82A3;
    color: #fff;
`;

const NavBarWrapper = styled.div`
    position: relative;
    height: 100%;
    padding: 0 .75rem;
`;

const NavBarTitle = styled.p`
    font-size: 2.1rem;
    color: inherit;
    display: inline-block;
    margin: 0;
    font-weight: lighter;
`;

const NavBarList = styled.ul`
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    float: right;
`;

const NavBarListItem = styled.li`
    float: left;
    padding: 0;
    display: list-item;
    text-align: -webkit-match-parent;
`;

const NavBarLink = styled.a`
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    font-size: 1rem;
    color: #fff;
    display: block;
    padding: 0 15px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: #2c617a;
    }
`;


export {
    NavBarContainer,
    NavBarWrapper,
    NavBarTitle,
    NavBarList,
    NavBarListItem,
    NavBarLink,
};