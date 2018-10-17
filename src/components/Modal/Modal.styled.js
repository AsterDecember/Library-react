import styled from 'styled-components';

const ModalOverlay = styled.div`
    z-index: 1002;
    display: block;
    opacity: 0.5;
    position: fixed;
    top: -25%;
    left: 0;
    bottom: 0;
    right: 0;
    height: 125%;
    width: 100%;
    background: #000;
    will-change: opacity;
`;

const ModalContainer = styled.div`
    z-index: 1003;
    display: block;
    opacity: 1;
    top: 10%;
    transform: scaleX(1) scaleY(1);
    position: fixed;
    left: 0;
    right: 0;
    background-color: #fafafa;
    padding: 0;
    max-height: 70%;
    width: 55%;
    margin: auto;
    overflow-y: auto;
    border-radius: 2px;
    will-change: top, opacity;
`;

const ModalContent = styled.div`
    padding: 24px;
`;

const ModalFooter = styled.div`
    border-radius: 0 0 2px 2px;
    background-color: #fafafa;
    padding: 4px 6px;
    height: 56px;
    /* width: 100%; */
    text-align: right;
}
`;


export {
    ModalOverlay,
    ModalContainer,
    ModalContent,
    ModalFooter,
};