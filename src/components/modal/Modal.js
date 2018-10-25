import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

/*
 * 在modal出现时，在body上增加一个类名：be-modal-active
 * 
 */
const modalOpenClass = 'be-modal-active';
const toggleBodyClass = isOpen => {
    const body = document.body;
    if (isOpen) {
        body.classList.add(modalOpenClass);
        // document.documentElement.style.overflow='hidden';
        //
        // js 禁用鼠标滚动
        // document.onmousewheel = function() {
        //     return false;
        // }
    } else {
        body.classList.remove(modalOpenClass);
        // document.documentElement.style.overflow='visible';
        //
        // js 恢复鼠标滚动
        // document.onmousewheel = function() {
        //     return true;
        // }
    }
};
export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen || false,
        };
        toggleBodyClass(props.isOpen);
    }
    // 关闭弹层函数
    close(autoClose) {
        // 判断是否要关闭Modal,
        // 如果是用Modal的话，是否关闭从props传递来决定
        // 如果是用Modal.xx的话，点击时候就关闭，并在DOM中删除Modal.xx
        // this.props.autoClose = true,时自动关闭Modal,并在DOM中删除Modal
        if (!autoClose) return;
        toggleBodyClass(false);
        this.setState(
            {
                isOpen: false,
            },
            () => {
                // afterClose: 删除dom节点
                if (typeof this.props.afterClose === 'function') {
                    this.props.afterClose();
                }
            }
        );
    }
    // 点击确认回调函数
    onOkClick(e) {
        this.props.onOk();
        this.close(this.props.autoClose);
    }
    // 点击取消的回调函数
    onCancelClick(e) {
        this.props.onCancel();
        this.close(this.props.autoClose);
    }
    onClose(e) {
        this.props.onClose();
        this.close(this.props.autoClose);
    }
    componentWillReceiveProps(nextProps) {
        //判断执行的是否是当前的Modal.解决了页面中多个Modal，后面的
        //Modal会改变body的类名
        if (nextProps.isOpen !== this.props.isOpen) {
            toggleBodyClass(nextProps.isOpen);
            if ('isOpen' in nextProps) {
                this.setState({
                    isOpen: nextProps.isOpen,
                });
            }
        }
    }
    componentWillUnmount() {
        toggleBodyClass(false);
    }
    render() {
        const {
            title,
            children,
            verticalMiddle,
            buttonCenter,
            okText,
            cancelText,
            maskClosable,
            size,
            closable,
            showFooter,
        } = this.props;
        const {isOpen} = this.state;
        return isOpen ? (
            <React.Fragment>
                <div className={`be-modal-mask`} />
                <div
                    className={`be-modal ${size} ${verticalMiddle ? 'vertical-middle' : ''} ${
                        buttonCenter ? 'button-center' : ''
                    }`}
                    onClick={
                        maskClosable
                            ? () => {
                                  this.close(this.props.autoClose);
                              }
                            : ''
                    }
                >
                    <div
                        className="modal-container"
                        onClick={e => {
                            window.event.cancelBubble = true;
                            e.stopPropagation();
                        }}
                    >
                        {closable ? (
                            <span
                                className="modal-close fc-close"
                                onClick={e => {
                                    this.onClose();
                                }}
                            />
                        ) : (
                            ''
                        )}
                        {title ? <div className="modal-header">{title}</div> : ''}
                        <div className="modal-body">{children}</div>
                        {
                            showFooter ? <div className="modal-footer">

                                            {
                                                cancelText ? <Button
                                                                type="primary-ghost"
                                                                onClick={e => {
                                                                    this.onCancelClick();
                                                                    window.event.cancelBubble = true;
                                                                    e.stopPropagation();
                                                                }}
                                                            >
                                                                {cancelText}
                                                            </Button> : null
                                            }
                                            {
                                               okText ?  <Button
                                                            type="primary"
                                                            onClick={e => {
                                                                this.onOkClick();
                                                                window.event.cancelBubble = true;
                                                                e.stopPropagation();
                                                            }}
                                                        >
                                                            {okText}
                                                        </Button> : null
                                            }
                                        </div> : ''
                        }
                        
                    </div>
                </div>
            </React.Fragment>
        ) : (
            ''
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    verticalMiddle: PropTypes.oneOf(['verticalMiddle', '', true]),
    buttonCenter: PropTypes.oneOf(['buttonCenter', '', true]),
    maskClosable: PropTypes.bool,
    cancelText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    okText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    size: PropTypes.oneOf(['mini', 'small', '', 'big', 'large']),
    closable: PropTypes.bool,
    onClose: PropTypes.func,
    showFooter: PropTypes.bool,
};

Modal.defaultProps = {
    maskClosable: true,
    cancelText: 'Cancel',
    onCancel: () => {},
    okText: 'OK',
    onOk: () => {},
    autoClose: false,
    size: '',
    closable: true,
    onClose: () => {},
    showFooter: true,
};
/* 1. isOpen Modal的状态
 * 2. title Modal的标题
 * 3. children Modal的主体内容
 * 4. position Modal的主体的位置
 * 5. maskClosable: true || false, 点击蒙版是否可以关闭
 * 6. cancelText, 关闭按钮文案  
 * 8. onCancel 关闭按钮回调函数 
 * 7. okText 确认按钮文案 
 * 9. onOk 确认按钮回调函数 
 * 10.afterClose Modal关闭的回调函数
 * 11.autoClose: true ||  false,  点击“确认”，“取消”，“蒙版”，是否自动关闭Modal，并删除Modal,DOM节点(解决异步问题)
 * 12.size Modal 的大小 (默认无)
 * 13.closable 是否显示右上角的关闭按钮
 */
