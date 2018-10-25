import {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: props.position || null,
        };
        this.element = '';
        this.onBodyClick = this.onBodyClick.bind(this);
    }
    findElement(ele) {
        if (this.state.position) {
            if (ele.parentNode) {
                if (ele.parentNode && ele.parentNode.className === 'drop-down') {

                } else {
                    return this.findElement(ele.parentNode);
                }
            } else {
                this.setState({
                    position: null,
                });
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.position !== this.props.position) {
            if ('position' in nextProps) {
                this.setState({
                    position: nextProps.position,
                });
            }
        }
    }
    onBodyClick(e) {
        if (this.state.position && this.props.maskClosable) {
            this.findElement(e.target);
        }
    }
    componentDidMount() {
        document.body.addEventListener('click', this.onBodyClick);
        document.body.setAttribute('style', 'position: relative');
    }
    renderElement() {
        const {position} = this.state;
        let style_position = "";
        if (position) {
            switch (this.props.direction){
                case 'bottom':
                    style_position = `position: absolute; top: ${position.top  + position.height + 2 + 'px'}; left: ${position.left + 'px'}; z-index: ${ this.props.style.zIndex || 99999 }`;
                    break;
                case 'right':
                    style_position = `position: absolute; top: ${position.top + 'px'}; left: ${position.left + position.width + 2 + 'px'}; z-index: ${ this.props.style.zIndex || 99999 } `;
                    break;
            }
            // 判断页面中是否有drop-down的div
            if (document.getElementsByClassName('drop-down').length) {
                this.element = document.getElementsByClassName('drop-down')[0];
                this.element.setAttribute(
                    'style',
                    style_position
                );
            } else {
                this.element = document.createElement('div');
                this.element.setAttribute('class', 'drop-down');
                this.element.setAttribute(
                    'style',
                    style_position
                );
                document.body.appendChild(this.element);
            }
        }
    }
    render() {
        const {position} = this.state;
        this.renderElement();
        return position ? ReactDOM.createPortal(this.props.children, this.element) : null;
    }
}

DropDown.propTypes = {
    position: PropTypes.object,
    direction: PropTypes.string,
    childrenSize: PropTypes.object,
    maskClosable:PropTypes.bool,
    style:PropTypes.object,
};
DropDown.defaultProps = {
    position: null,
    direction:'bottom',
    childrenSize:null,
    maskClosable: true,
    style:{},
};
