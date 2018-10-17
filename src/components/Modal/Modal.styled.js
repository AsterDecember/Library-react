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

const ModalButton = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    -webkit-transition: background-color .2s ease-out;
    transition: background
    font-size: 14px;
    border: none;
    border-radius: 2px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-transform: uppercase;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
}
}
`;


export {
    ModalOverlay,
    ModalContainer,
    ModalContent,
    ModalFooter,
    ModalButton,
};