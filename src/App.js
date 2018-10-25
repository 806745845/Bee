import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import AsyncComponent from './AsyncComponent';
//普通加载
// import Home from './Home';
import Scroll from '../src/components/scroll-box'
//按需加载
const Home = AsyncComponent(() => import('./Home.js'));
const Button = AsyncComponent(() => import('./doc/button.js'));
const Alert = AsyncComponent(() => import('./doc/alert.js'));
const Modal = AsyncComponent(() => import('./doc/modal.js'));
const DatePicker = AsyncComponent(() => import('./doc/datePicker'));
const ScrollBox = AsyncComponent(() => import('./doc/scrollBox'));
const Pagination = AsyncComponent(() => import('./doc/pagination'));
const Input = AsyncComponent(() => import('./doc/input'));
const Select = AsyncComponent(() => import('./doc/select'));
const DropDown = AsyncComponent(() => import('./doc/dropDown'));

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="doc-sider active">
                    <Scroll>
                        <ul className="doc-sider-nav">
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/button' ? 'active' : ''
                                    }
                                    to="/button"
                                >
                                    Button 按钮
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/input' ? 'active' : ''
                                    }
                                    to="/input"
                                >
                                    Input 输入框
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/select' ? 'active' : ''
                                    }
                                    to="/select"
                                >
                                    Select 选择框
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/alert' ? 'active' : ''
                                    }
                                    to="/alert"
                                >
                                    Alert 全局提示
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/modal' ? 'active' : ''
                                    }
                                    to="/modal"
                                >
                                    Modal 对话框
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/datePicker' ? 'active' : ''
                                    }
                                    to="/datePicker"
                                >
                                    DatePicker 对话框
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/scrollBox' ? 'active' : ''
                                    }
                                    to="/scrollBox"
                                >
                                    ScrollBox 滚动条
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/pagination' ? 'active' : ''
                                    }
                                    to="/pagination"
                                >
                                    Pagination 分页器
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={
                                        this.props.location.pathname === '/dropDown' ? 'active' : ''
                                    }
                                    to="/dropDown"
                                >
                                    DropDown （定位组件）
                                </Link>
                            </li>
                        </ul>
                    </Scroll>

                </div>
                <div className="doc-main">
                    <div className="doc-container">
                        <article className="markdown-body">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/button" component={Button} />
                                <Route path="/input" component={Input} />
                                <Route path="/select" component={Select} />
                                <Route path="/alert" component={Alert} />
                                <Route path="/modal" component={Modal} />
                                <Route path="/datePicker" component={DatePicker} />
                                <Route path="/scrollBox" component={ScrollBox} />
                                <Route path="/pagination" component={Pagination} />
                                <Route path="/dropDown" component={DropDown} />
                            </Switch>
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
