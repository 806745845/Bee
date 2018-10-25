import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current:
                this.props.currentPage === null || typeof this.props.currentPage === 'undefined'
                    ? 1
                    : this.props.currentPage,
            total: this.props.total,
            pageSize:
                this.props.pageSize === null || typeof this.props.pageSize === 'undefined'
                    ? 10
                    : this.props.pageSize,

            handleCurrentVal: '',
        };
    }
    componentDidMount() {}
    changeCurrent(n) {
        let now = this.state.current;
        this.setState({
            current: n,
        },()=>{
            if ( now !== this.state.current) {
                this.props.onChange && this.props.onChange(this.state.current)
            }
        });
    }

    changePage(type) {
        const {current, total, pageSize} = this.state;
        let pageNum = Math.ceil(total / pageSize);
        let now = current;
        if (type === 'prev' && current > 1) {
            this.setState({
                current: current - 1,
            });
        } else if (type === 'next' && current < pageNum) {
            this.setState({
                current: current + 1,
            });
        }
        this.setState({  },()=>{
            if (now !== this.state.current){
                this.props.onChange && this.props.onChange(this.state.current)
            }
        })
    }
    handleChange(e) {
        if (e && e.keyCode === 13) {
            const {current, total, pageSize} = this.state;
            let val = e.target.value;
            if (val > Number(Math.ceil(total / pageSize))) {
                val = Math.ceil(total / pageSize);
            } else if (val < 1) {
                val = current;
            }
            this.setState({
                current: Number(val),
            });
            this.refs.jumperInput.value = null;
        }
    }

    render() {
        const {current, total, pageSize} = this.state;
        let pageNum = Math.ceil(total / pageSize);
        let domPageNoItems = [];
        if (pageNum <= 5) {
            domPageNoItems = Array.from(new Array(pageNum), (val, index) => index + 1).map(
                (n, index) => (
                    <li
                        key={index}
                        className={n === current ? 'current' : ''}
                        onClick={() => {
                            this.changeCurrent(n);
                        }}
                    >
                        {n}
                    </li>
                )
            );
        } else {
            if (current <= 4) {
                domPageNoItems = Array.from(new Array(4), (val, index) => index + 1).map(
                    (n, index) => (
                        <li
                            key={index}
                            className={n === current ? 'current' : ''}
                            onClick={() => {
                                this.changeCurrent(n);
                            }}
                        >
                            {n}
                        </li>
                    )
                );
                domPageNoItems.push(<li key="ellipsis1">...</li>);
                domPageNoItems.push(
                    <li
                        key={pageNum}
                        onClick={() => {
                            this.changeCurrent(pageNum);
                        }}
                    >
                        {pageNum}
                    </li>
                );
            } else if (current > pageNum - 4) {
                domPageNoItems.push(
                    <li
                        key="1"
                        onClick={() => {
                            this.changeCurrent(1);
                        }}
                    >
                        1
                    </li>
                );
                domPageNoItems.push(<li key="ellipsis2">...</li>);
                for (let i = pageNum - 3; i <= pageNum; i++) {
                    domPageNoItems.push(
                        <li
                            key={i}
                            className={i === current ? 'current' : ''}
                            onClick={() => {
                                this.changeCurrent(i);
                            }}
                        >
                            {i}
                        </li>
                    );
                }
            } else {
                if (current - 2 > 1) {
                    domPageNoItems.push(
                        <li
                            key="1"
                            onClick={() => {
                                this.changeCurrent(1);
                            }}
                        >
                            1
                        </li>
                    );
                    domPageNoItems.push(<li key="ellipsis1">...</li>);
                }

                for (let i = current - 2; i <= current + 2; i++) {
                    domPageNoItems.push(
                        <li
                            key={i}
                            className={i === current ? 'current' : ''}
                            onClick={() => {
                                this.changeCurrent(i);
                            }}
                        >
                            {i}
                        </li>
                    );
                }

                if (current + 2 <= pageNum) {
                    domPageNoItems.push(<li key="ellipsis2">...</li>);
                    domPageNoItems.push(
                        <li
                            key={pageNum}
                            onClick={() => {
                                this.changeCurrent(pageNum);
                            }}
                        >
                            {pageNum}
                        </li>
                    );
                }
            }
        }
        return (
            <div className="pagination_container clearfix" ref="pagination_container">
                <ul className="nav-box clearfix">
                    <li
                        className="prev"
                        onClick={() => {
                            this.changePage('prev');
                        }}
                    >
                        &lt;
                    </li>
                    {domPageNoItems}
                    <li
                        className="next"
                        onClick={() => {
                            this.changePage('next');
                        }}
                    >
                        &gt;
                    </li>
                </ul>
                {this.props.showQuickJumper ? (
                    <span className="turnPage">
                        <em style={{marginRight: 10}}> 共{Math.ceil(total / pageSize)}页</em>
                        跳至
                        <input
                            type="text"
                            ref="jumperInput"
                            onChange={() => {}}
                            onKeyDown={e => {
                                this.handleChange(e);
                            }}
                        />
                        页
                    </span>
                ) : null}
            </div>
        );
    }
}
Pagination.defaultProps = {
    pageSize: 10,
    currentPage: 1,
};
Pagination.propTypes = {
    total: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    showQuickJumper: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Pagination;
