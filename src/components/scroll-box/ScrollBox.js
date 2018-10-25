import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScrollBox extends Component {
    scrollBarWidth = 0;
    scrollBarHeight = 0;

    startPosY = 0;
    changePosY = 0;
    startPosX = 0;
    changePosX = 0;

    wrapHeight = 0;
    contentHeight = 0;
    scrollHeight = 0;
    scrollTop = 0;
    wrapWidth = 0;
    contentWidth = 0;
    scrollWidth = 0;
    scrollLeft = 0;

    shouldUpdate = true;
    mouseDownY = false;
    mouseDownX = false;

    constructor(props) {
        super(props);
        this.state = {
            needScrollBarY: false,  // 是否显示竖直滚动条
            needScrollBarX: false,  //是否显示横向滚动条

            scrollBarSize: this.props.barWidth, // 滚动条宽度
            scrollWrapColor: 'white', //整个滚动条的背景颜色
            scrollBarColor: this.props.barColor, //滚动条本身颜色

            scrollBarTop: 0,    // 竖直滚动条，距离可视区域顶部的距离
            scrollBarBot: 0,    // 竖直滚动条，距离可视区域底部的距离

            scrollBarLeft: 0,   //横向滚动条， 距离可视区域左边的距离
            scrollBarRight: 0,  //横向滚动条，距离可视区域右边的距离

            realScrollBarWidth: 0,
            realScrollBarHeight: 0,
        };
    }
    //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps() {
        this.shouldUpdate = true;
    }
    //在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate() {
        if (!this.shouldUpdate) return;
        this.scrollBarStateChange();
        this.shouldUpdate = false;
        window.onresize = () =>{
            this.scrollBarStateChange()
        };
    }
    //在第一次渲染后调用
    componentDidMount() {
        this.scrollBarStateChange();
        window.onresize = () =>{
            this.scrollBarStateChange()
        };
    }
    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount(){
        document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
        document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        window.onresize=null;
    }
    handleMouseDown(e, type) {
        if (type === 'Y') {
            this.mouseDownY = true;
            this.mouseDownX = false;
            this.startPosY = e.clientY;
        } else if (type === 'X') {
            this.mouseDownX = true;
            this.mouseDownY = false;
            this.startPosX = e.clientX;
        }
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }
    handleMouseUp() {
        if (!this.mouseDownY && !this.mouseDownX) {
            return;
        } else if (this.mouseDownY) {
            this.mouseDownY = false;
        } else if (this.mouseDownX) {
            this.mouseDownX = false;
        }
    }
    handleMouseMove(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.mouseDownX && !this.mouseDownY) {
        } else if (this.mouseDownX) {
            this.changePosX = this.startPosX - e.clientX;
            this.startPosX = e.clientX;
            this.refs.scrollContentWrap.scrollLeft -=
                (this.changePosX * this.contentWidth) / this.wrapWidth;
        } else if (this.mouseDownY) {
            this.changePosY = this.startPosY - e.clientY;
            this.startPosY = e.clientY;
            this.refs.scrollContentWrap.scrollTop -=
                (this.changePosY * this.contentHeight) / this.wrapHeight;
        }
    }
    scrollBarStateChange() {
        let scrollContentWrap = this.refs.scrollContentWrap;
        let scrollContent = this.refs.scrollContent;
        this.scrollBarWidth = scrollContentWrap.offsetWidth - scrollContentWrap.clientWidth;
        this.scrollBarHeight = scrollContentWrap.offsetHeight - scrollContentWrap.clientHeight;
        this.setState({
            realScrollBarWidth: this.scrollBarWidth,
            realScrollBarHeight: this.scrollBarHeight,
        });
        if (scrollContent.clientHeight <= scrollContentWrap.clientHeight) {
            this.setState({
                needScrollBarY: false,
            });
            document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
            document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        } else {
            this.wrapHeight = scrollContentWrap.clientHeight;
            this.contentHeight = scrollContent.clientHeight;
            this.scrollHeight = (this.wrapHeight / this.contentHeight * 100).toFixed(2);
            this.scrollTop = ((scrollContentWrap.scrollTop / this.contentHeight) * 100).toFixed(2);
            let scrollBarTop = parseFloat(this.scrollTop);
            let scrollBarBot = 100 - (parseFloat(this.scrollHeight) + parseFloat(this.scrollTop));
            this.setState({
                scrollBarTop: scrollBarTop,
                scrollBarBot: scrollBarBot,
                needScrollBarY: true,
            });
        }
        if (scrollContent.clientWidth <= scrollContentWrap.clientWidth) {
            this.setState({
                needScrollBarX: false,
            });
            document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
            document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        } else {
            this.wrapWidth = scrollContentWrap.clientWidth;
            this.contentWidth = scrollContent.clientWidth;
            this.scrollWidth = ((this.wrapWidth / this.contentWidth) * 100).toFixed(2);
            this.scrollLeft = ((scrollContentWrap.scrollLeft / this.contentWidth) * 100).toFixed(2);

            let scrollBarLeft = parseFloat(this.scrollLeft);
            let scrollBarRight = 100 - (parseFloat(this.scrollWidth) + parseFloat(this.scrollLeft));
            this.setState({
                scrollBarLeft: scrollBarLeft,
                scrollBarRight: scrollBarRight,
                needScrollBarX: true,
            });
        }
    }
    handleScroll() {
        let scrollBarTop = (this.refs.scrollContentWrap.scrollTop / this.contentHeight) * 100;
        let scrollBarBot = 100 - (parseFloat(this.scrollHeight) + parseFloat(scrollBarTop));
        let scrollBarLeft = (this.refs.scrollContentWrap.scrollLeft / this.contentWidth) * 100;
        let scrollBarRight = 100 - (parseFloat(this.scrollWidth) + parseFloat(scrollBarLeft));
        this.setState({
            scrollBarTop: scrollBarTop.toFixed(2),
            scrollBarBot: scrollBarBot.toFixed(2),
            scrollBarLeft: scrollBarLeft.toFixed(2),
            scrollBarRight: scrollBarRight.toFixed(2),
        });
        window.onresize = () =>{
            this.scrollBarStateChange()
        };
    }
    onMouseLeave = () => {
        document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
        document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    };
    //渲染滚动条
    renderScroll(){
        let scrollBarY = (
            <div
                className="scrollBarWrapY"
                ref="scrollBarWrapY"
                style={{
                    width: this.state.scrollBarSize ,
                    borderRadius: this.state.scrollBarSize / 2 + 'px',
                    backgroundColor: this.state.scrollWrapColor,
                    height:'100%',
                    position:'absolute',
                    right:0,
                    top:0,
                    zIndex: 2,
                }}
            >
                <div
                    className="scrollBarY"
                    ref="scrollBarY"
                    style={{
                        top: this.state.scrollBarTop + '%',
                        bottom: this.state.scrollBarBot + '%',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        backgroundColor: this.state.scrollBarColor,
                        opacity: .6
                    }}
                    onMouseDown={e => {
                        this.handleMouseDown(e, 'Y');
                    }}
                    onMouseUp={ this.onMouseLeave }
                    onMouseLeave={ this.onMouseLeave }
                />
            </div>
        );
        let scrollBarX = (
            <div
                className="scrollBarWrapX"
                ref="scrollBarWrapX"
                style={{
                    height: this.state.scrollBarSize + 'px',
                    borderRadius: this.state.scrollBarSize / 2 + 'px',
                    backgroundColor: this.state.scrollWrapColor,
                }}
            >
                <div
                    className="scrollBarX"
                    ref="scrollBarX"
                    style={{
                        left: this.state.scrollBarLeft + '%',
                        right: this.state.scrollBarRight + '%',
                        backgroundColor: this.state.scrollBarColor,
                    }}
                    onMouseDown={e => {
                        this.handleMouseDown(e, 'X');
                    }}
                    onMouseUp={ this.onMouseLeave }
                    onMouseLeave={ this.onMouseLeave }
                />
            </div>
        );
        if (this.state.needScrollBarY && this.state.needScrollBarX ){
            return [scrollBarY, scrollBarX]
        }else if (this.state.needScrollBarY && !this.state.needScrollBarX) {
            return scrollBarY
        }else if (!this.state.needScrollBarY && this.state.needScrollBarX) {
            return scrollBarX
        }
    }
    render() {
        return (
            <div className="scrollBoxWrap" ref="scrollBoxWrap" style={ this.props.style ? this.props.style : {position:'relative',width:'100%',height:'100%'} } >
                { this.renderScroll() }
                <div
                    className="scrollContentWrap"
                    ref="scrollContentWrap"
                    style={{
                        right: '-' + this.state.realScrollBarWidth + 'px',
                        bottom: this.state.realScrollBarHeight + 'px',
                        width: '100%',
                        height: '100%',
                    }}
                    onScroll={() => {
                        this.handleScroll();
                    }}
                >
                    <div className="scrollContent" ref="scrollContent" style={{ paddingRight: this.state.scrollBarSize + 'px' }} onScroll={() => {
                        this.handleScroll();
                    }}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
ScrollBox.defaultProps = {
    style:null,
    barColor:'#c1c1c1',
    barWidth: 6,
};
ScrollBox.propTypes = {
    style: PropTypes.object,
    barColor: PropTypes.string,
    barWidth: PropTypes.number,
};
export default ScrollBox;

