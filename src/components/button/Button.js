import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            tagName,
            type,
            size,
            block,
            children,
            icon,
            iconType,
            iconDirection,
            doing,
            style,
            onClick,
        } = this.props;

        var tagProps = {
            style: style,
            className: `be-button ${type} ${size} ${block ? 'block' : ''} ${doing ? 'doing' : ''}`,
            onClick: e => {
                onClick(e);
            },
        };
        var childrenArr = [children];
        if (icon || doing) {
            var iconTag = <i className={`${iconDirection} ${iconType}`} key="icon" />;
            if (iconDirection === 'left') {
                childrenArr.unshift(iconTag);
            } else {
                childrenArr.push(iconTag);
            }
        }
        return React.createElement(tagName, tagProps, childrenArr);
    }
}

Button.propTypes = {
    tagName: PropTypes.oneOf(['a', 'button']),
    type: PropTypes.oneOf([
        'default',
        'primary',
        'primary-ghost',
        'success',
        'success-ghost',
        'warning',
        'warning-ghost',
        'danger',
        'danger-ghost',
        'link',
        'link-ghost',
        'disabled',
    ]),
    doing: PropTypes.oneOf(['doing', '', true]),
    size: PropTypes.oneOf(['big', '', 'small']),
    block: PropTypes.oneOf(['block', '', true]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    onClick: PropTypes.func,
    icon: PropTypes.bool,
    iconType: PropTypes.string,
    iconDirection: PropTypes.oneOf(['left', 'right']),
    style: PropTypes.object,
};
Button.defaultProps = {
    tagName: 'button',
    type: 'default',
    doing: '',
    size: '',
    block: '',
    onClick: () => {},
    icon: false,
    iconType: 'fc-loading-line',
    iconDirection: 'left',
    style: {},
};
/* 1. tagName 按钮的标签类型 (默认button)
 * 2. type 按钮样式 (默认default)
 * 3. size 按钮尺寸 (默认大小)
 * 4. block 添加block设置按钮宽度100% (默认无)
 * 5. onClick: 按钮点击的事件
 * 6. icon: 是否在按钮上增加icon (默认无)
 * 7. iconType: icon的类型 (默认左箭头)
 * 8. iconDirection: icon的方向 (默认在左)
 * 9. loading: 增加loading
 */
