import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

const show = props => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const afterClose = () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);

        if (typeof props.afterClose === 'function') {
            props.afterClose();
        }
    };

    ReactDOM.render(
        <Modal {...props} afterClose={afterClose} isOpen autoClose>
            {props.content}
        </Modal>,
        div
    );
};

const ModalBox = Modal;

ModalBox.confirm = props =>
    show({
        ...props,
        type: 'confirm',
    });

export default Modal;
