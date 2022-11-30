import React from 'react'
import ReactDom from 'react-dom'
import ModalContent from './ModalContent';

const Modal = () => {

    return ReactDom.createPortal(
        <ModalContent />
        , document.getElementById('app-modal')
    )
}

export default Modal;