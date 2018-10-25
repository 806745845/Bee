import React, {Component} from 'react';
import Button from '../components/button';
import Alert from '../components/alert';
import '../components/css/alert.css';
import '../components/css/button.css';

class alert extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Alert 全局提示</h1>
                <p className="myT">默认: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button
                        onClick={() => {
                            Alert.info('This is a message of success', 1.5, () => {
                                console.log('close');
                            });
                        }}
                    >
                        show message
                    </Button>
                    <div className="addMT">
                        <code>
                            {
                                "<Button onClick={()=> { Alert.info('This is a message of success', 1.5) }}>show message</Button>"
                            }
                        </code>
                    </div>
                </div>
                <p className="myT">duration等于0时，表示不自动关闭，点击X关闭: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button
                        onClick={() => {
                            Alert.error('This is a message of success', 0, () => {
                                console.log('close');
                            });
                        }}
                    >
                        show message
                    </Button>
                    <div className="addMT">
                        <code>
                            {
                                "<Button onClick={()=> { Alert.error('This is a message of success', 1.5) }}>show message</Button>"
                            }
                        </code>
                    </div>
                </div>
                <h3>API</h3>
                <p>组件提供了一些静态方法，使用方式和参数如下：</p>
                <ul>
                    <li>
                        <code>Alert.info(title, [duration], onClose)</code>
                    </li>
                    <li>
                        <code>Alert.warning(title, [duration], onClose)</code>
                    </li>
                    <li>
                        <code>Alert.error(title, [duration], onClose)</code>
                    </li>
                    <li>
                        <code>Alert.success(title, [duration], onClose)</code>
                    </li>
                </ul>
                <p />
                <table>
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>提示内容</td>
                            <td>string|ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>
                                自动关闭的延时,单位秒: <code>0表示不自动关闭</code>
                            </td>
                            <td>number</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>关闭时触发的回调函数</td>
                            <td>Function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>
                                警告框的关闭: <code>closable</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <h3>页面中的警告框</h3>
                <p className="myT">默认: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Alert tip="友情提醒：" content="天干物燥，小心火烛！" closable />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Alert tip='友情提醒：' content='天干物燥，小心火烛！' closable />`}
                        </pre>
                    </div>
                </div>
                <h3>API</h3>
                <p>组件提供了一些静态方法，使用方式和参数如下：</p>
                <p />
                <table>
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>
                                警告框的样式: <code>primary</code>, <code>warning</code>,{' '}
                                <code>danger</code>, <code>success</code>
                            </td>
                            <td>string</td>
                            <td>primary</td>
                        </tr>
                        <tr>
                            <td>tip</td>
                            <td>警告框的标题</td>
                            <td>string|ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>警告框的内容</td>
                            <td>string|ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>
                                警告框的关闭: <code>closable</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <span style={{float: 'right'}}>创建-吴肖琪</span>
            </React.Fragment>
        );
    }
}

export default alert;
