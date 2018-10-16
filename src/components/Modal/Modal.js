import React from 'react';

import {
    ModalOverlay,
    ModalContainer,
    ModalContent,
    ModalFooter,
} from './Modal.styled';


const Modal = (props) => {
    return (
        <div>
            <ModalContainer>
                <ModalContent>
                    Something Interesting
                </ModalContent>

                <ModalFooter>
                    Something more interesting
                </ModalFooter>
            </ModalContainer>
            
            <ModalOverlay />
        </div>
    );
};

export default Modal;