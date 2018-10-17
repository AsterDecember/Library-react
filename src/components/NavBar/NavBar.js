import React, { Component } from 'react';
import CreateElement from '../CreateElement/CreateElement';
import Modal from '../Modal/Modal';
import { ModalButton } from '../Modal/Modal.styled';
import {
    NavBarContainer,
    NavBarWrapper,
    NavBarTitle,
    NavBarList,
    NavBarListItem,
    NavBarLink,
} from './NavBar.styled';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.modalButtons = [];
    }

    componentDidMount() {
        this.setUpModalButtons()
    }

    showModal() {
        this.setState({ showModal: true });
    }

    hideModal() {
        this.setState({ showModal: false });
    }

    setUpModalButtons() {
        const hideModalButton = <ModalButton onClick={this.hideModal}>Close Modal</ModalButton>
        this.modalButtons = [...this.modalButtons, hideModalButton];
    }

    render() {

        const modal = this.state.showModal ? (
            <Modal modalButtons={this.modalButtons}>
                <CreateElement />
            </Modal>
        ) : null;

        return (
            <div>
                <NavBarContainer>
                    <NavBarWrapper>
                        
                        <NavBarTitle>
                            Libreria
                        </NavBarTitle>
        
                        <NavBarList>
                            <NavBarListItem>
                                <NavBarLink onClick={this.showModal}>
                                    <i className="fas fa-plus"></i> Agregar Libro
                                </NavBarLink>
                            </NavBarListItem>
                        </NavBarList>
        
                    </NavBarWrapper>
                </NavBarContainer>
                {modal}
            </div>
        );
    }
}

export default NavBar;