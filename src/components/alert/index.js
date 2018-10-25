import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

const show = props => {
    var messageBox = document.getElementsByClassName('be-alert-fixed')[0];
    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.className = 'be-alert-fixed';
        document.body.appendChild(messageBox);
    }

    var singleMessageBox = document.createElement('div');
    singleMessageBox.className = 'be-alert-box';
    messageBox.insertBefore(singleMessageBox, messageBox.firstChild);

    const onClose = () => {
        // 这里的延迟300和样式中的延迟保持一致
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(singleMessageBox);
            messageBox.removeChild(singleMessageBox);

            if (typeof props.onClose === 'function') {
                props.onClose();
            }
        }, 300);
    };

    ReactDOM.render(<Alert {...props} onClose={onClose} isAlert />, singleMessageBox);
};

const AlertBox = Alert;
AlertBox.info = (title, duration, onClose) =>
    show({
        title: title,
        duration: duration,
        onClose: onClose,
        type: 'primary',
    });
AlertBox.warning = (title, duration, onClose) =>
    show({
        title: title,
        duration: duration,
        onClose: onClose,
        type: 'warning',
    });
AlertBox.error = (title, duration, onClose) =>
    show({
        title: title,
        duration: duration,
        onClose: onClose,
        type: 'danger',
    });

AlertBox.success = (title, duration, onClose) =>
    show({
        title: title,
        duration: duration,
        onClose: onClose,
        type: 'success',
    });

// export {
//     AlertBox as Alert,
// }

export default Alert;
