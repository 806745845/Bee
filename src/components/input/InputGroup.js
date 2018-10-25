import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

export default class InputGroup extends Component {
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
        const {
            type,
            placeholder,
            value,
            defaultValue,

            shadow,
            style,
            size,
            cling,
            left,
            right,
        } = this.props;

        var tagProps = {
            style: style,
            className: `be-input-group ${shadow ? 'shadow' : ''} ${cling ? 'cling' : ''} ${size}`,
        };

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
            childrenArr.unshift(
                <div className="addon" key="left">
                    {left}
                </div>
            );
        }
        if (right) {
            childrenArr.push(
                <div className="addon" key="right">
                    {right}
                </div>
            );
        }
        return React.createElement('div', tagProps, childrenArr);
    }
}

InputGroup.propTypes = {
    // Input 的参数
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,

    // InputGroup 的参数
    shadow: PropTypes.oneOf(['shadow', '', true]),
    size: PropTypes.oneOf(['big', '', 'small']),
    style: PropTypes.object,
    cling: PropTypes.oneOf(['cling', '', true]),
    type: PropTypes.string,
};
InputGroup.defaultProps = {
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
    cling: '',
    left: '',
    right: '',
    type: 'text',
};
