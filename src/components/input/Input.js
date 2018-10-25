import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
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
        const {style, placeholder, value, defaultValue, shadow, size, type} = this.props;

        var tagProps = {
            style: style,
            type: type,
            className: `be-input ${shadow ? 'shadow' : ''} ${size}`,
            placeholder: placeholder,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onKeyDown: this.onKeyDown,
        };

        if (value !== undefined) {
            tagProps['value'] = value;
        } else if (defaultValue !== undefined) {
            tagProps['defaultValue'] = defaultValue;
        }
        return React.createElement('input', tagProps, null);
    }
}

Input.propTypes = {
    style: PropTypes.object,
    placeholder: PropTypes.string,
    shadow: PropTypes.oneOf(['shadow', '', true]),
    size: PropTypes.oneOf(['big', '', 'small']),
    type:PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
};
Input.defaultProps = {
    style: {},
    placeholder: '',
    value: undefined,
    defaultValue: undefined,
    shadow: '',
    size: '',
    type:'text',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClick: () => {},
    onKeyDown: () => {},
};
