import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    ModalOverlay,
    ModalContainer,
    ModalContent,
    ModalFooter,
} from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        console.log('%c Modal constructor', 'color: orange');
        console.log(props)
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    renderModalButtons() {
        return this.props.modalButtons ? this.props.modalButtons.map((button) => button) : null;
    }

    render() {

        const modalButtons = this.props.modalButtons || [];

        return ReactDOM.createPortal(
            <div>
                <ModalContainer>
                    <ModalContent>
                        {this.props.children}
                    </ModalContent>
    
                    <ModalFooter>
                        {this.renderModalButtons()}
                    </ModalFooter>
                </ModalContainer>
                
                <ModalOverlay />
            </div>,
            this.el,
        );
    }
};

export default Modal;