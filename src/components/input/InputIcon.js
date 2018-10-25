import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class InputIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChange = e => {
        this.props.onChange(e);
    };
    onFocus = e => {
        this.props.onFocus(e);
    };
    onBlur = e => {
        this.props.onBlur(e);
    };
    onClick = e => {
        this.props.onClick(e);
    };
    onKeyDown = e => {
        this.props.onKeyDown(e);
    };
    render() {
        const {placeholder, value, defaultValue, shadow, style, size, left, right,type } = this.props;

        var tagProps = {style: style, className: `be-input-icon ${shadow ? 'shadow' : ''} ${size}`};

        var childrenArr = [
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                key="input"
            />,
        ];

        if (left) {
            childrenArr.unshift(left);
        }
        if (right) {
            childrenArr.push(right);
        }
        return React.createElement('div', tagProps, childrenArr);
    }
}

InputIcon.propTypes = {
    // Input 的参数
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,

    // InputIcon 的参数
    shadow: PropTypes.oneOf(['shadow', '', true]),
    size: PropTypes.oneOf(['big', '', 'small']),
    style: PropTypes.object,
    type: PropTypes.string,
};
InputIcon.defaultProps = {
    placeholder: '',
    value: '',
    defaultValue: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClick: () => {},
    onKeyDown: () => {},
    
    shadow: '',
    size: '',
    style: {},
    left: '',
    right: '',
    type:'text'
};
