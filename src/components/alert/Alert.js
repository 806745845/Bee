import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertState: true,
            messageState: true,
        };
    }
    componentDidMount() {
        // alert 表示的是 alert.xxxx();
        //
        //
        // alert和message的区别
        if (this.props.isAlert) {
            // 判断是否输入的是0
            // 0表示不自动关闭

            if (this.props.duration !== 0) {
                setTimeout(() => {
                    this.setState({alertState: true}, () => {
                        this.props.onClose();
                    });
                }, this.props.duration * 1000);
            }
        }
    }
    onCloseMessage(state) {
        this.setState({[state]: false}, () => {
            this.props.onClose();
        });
    }
    render() {
        const {title, type, isAlert, closable, tip, content, duration} = this.props;
        const {alertState, messageState} = this.state;
        return isAlert ? (
            <div className={`be-alert ${type} ${alertState ? 'show' : 'hide'}`}>
                {duration === 0 ? (
                    <span
                        className="alert-close fc-close"
                        onClick={() => {
                            this.onCloseMessage('alertState');
                        }}
                    />
                ) : (
                    ''
                )}
                <i className="alert-icon fc-info-s" />
                <div className="alert-content">{title}</div>
            </div>
        ) : messageState ? (
            <div className={`be-alert ${type}`}>
                {closable ? (
                    <span
                        className="alert-close fc-close"
                        onClick={() => {
                            this.onCloseMessage('messageState');
                        }}
                    />
                ) : (
                    ''
                )}
                {tip ? (
                    <React.Fragment>
                        <i className="alert-icon fc-info-s" />
                        <div className="alert-title">{tip}</div>
                    </React.Fragment>
                ) : (
                    ''
                )}
                {content ? <div className="alert-content">{content}</div> : ''}
            </div>
        ) : (
            ''
        );
    }
}

Alert.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    duration: PropTypes.number,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'warning', 'danger', 'success']),
    tip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    closable: PropTypes.oneOf(['closable', '', true]),
};

Alert.defaultProps = {
    duration: 3,
    type: 'primary',
    closable: '',
    onClose: () => {},
};
