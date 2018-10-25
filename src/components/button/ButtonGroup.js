import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {cling, children, direction, size, style} = this.props;
        return (
            <div style = { style } className={`be-button-group ${cling ? 'cling' : ''} ${direction} ${size}`}>
                {children}
            </div>
        );
    }
}

ButtonGroup.propTypes = {
    cling: PropTypes.oneOf(['cling', '', true]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
    direction: PropTypes.oneOf(['left', '', 'right']),
    size: PropTypes.oneOf(['small', '', 'big']),
};

ButtonGroup.defaultProps = {
    cling: '',
    direction: '',
    size: '',
};
/* 
 * 1. direction 按钮组的对齐方向 (默认居中对齐)
 */
