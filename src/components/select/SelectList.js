import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SelectList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onClick = e => {
        this.props.onClick(e);
    };
    render() {
        const {type, style, children} = this.props;

        return (
            <div
                style={style}
                className={`${type === 'list' ? 'be-select-list' : ' be-select-cascader'} `}
            >
                <div className="be-select-content">{children}</div>
            </div>
        );
    }
}

SelectList.propTypes = {
    type: PropTypes.oneOf(['list', 'cascader']),
    style: PropTypes.object,
};
SelectList.defaultProps = {
    type: 'list',
    size: '',
};
