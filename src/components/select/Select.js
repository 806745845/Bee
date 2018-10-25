import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onClick = e => {
        this.props.onClick(e);
    };
    render() {
        const {type, size, style, direction, disabled, simple, placeholder, value} = this.props;

        return (
            <div
                style={style}
                className={`be-select ${size} ${simple ? 'simple' : type} ${
                    disabled ? 'disabled' : ''
                }`}
                onClick={this.onClick}
            >
                <i
                    className={`select-icon ${
                        direction === 'down' ? 'fc-arrow-down' : 'fc-arrow-up'
                    }`}
                />
                <p className={`select-selected`}>
                    
                    {
                        value ? <span className={`${simple ? '' : 'select-value'}`}>{ value }</span> : <span className={`${simple ? '' : 'select-placeholder'}`}>{ placeholder }</span>
                    }
                </p>
            </div>
        );
    }
}

Select.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warning', 'danger', 'success', 'shadow']),
    size: PropTypes.oneOf(['big', '', 'small']),
    style: PropTypes.object,
    onClick: PropTypes.func,
    direction: PropTypes.oneOf(['up', 'down']),
    simple: PropTypes.oneOf(['simple', '', true]),
    disabled: PropTypes.oneOf(['disabled', '', true]),
    placeholder: PropTypes.string,
    value: PropTypes.string,
};
Select.defaultProps = {
    type: 'default',
    size: '',
    onClick: () => {},
    style: {},
    direction: 'down',
    simple: '',
    disabled: '',
    placeholder: '请选择',
    value: ''
};
