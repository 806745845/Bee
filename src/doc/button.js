import React, {Component} from 'react';
import Button from '../components/button';
import '../components/css/button.css';

class button extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Button 按钮</h1>
                <p className="myT">默认样式: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button>Button</Button>
                    <div className="addMT">
                        <pre lang="javascript">{`<Button>Button</Button>`}</pre>
                    </div>
                </div>
                <p className="myT">按钮doing: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button doing type="warning">
                        警告 loading
                    </Button>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button doing type="warning">warning loading</Button>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">按钮尺寸: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button type="primary" size="big">
                        big button
                    </Button>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button type="primary" size="big">big button</Button>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">添加block设置按钮宽度100%: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button type="primary" block>
                        button
                    </Button>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button type="primary" block>big button</Button>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">按钮图标: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button type="primary" icon iconType="fc-arrow-left">
                        图标在左
                    </Button>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button type="primary" icon iconType="fc-arrow-left">图标在左</Button>`}
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
                            <td>tagName</td>
                            <td>
                                Button 的标签类型: <code>a</code>, <code>button</code>{' '}
                            </td>
                            <td>string</td>
                            <td>button</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>
                                Button 的样式: <code>default</code>, <code>primary</code>,{' '}
                                <code>primary-ghost</code>, <code>success</code>,{' '}
                                <code>success-ghost</code>, <code>warning</code>,{' '}
                                <code>warning-ghost</code>, <code>danger</code>,{' '}
                                <code>danger-ghost</code>, <code>link</code>, <code>disabled</code>
                            </td>
                            <td>string</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>doing</td>
                            <td>
                                Button 需要loading时添加: <code>doing</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>
                                Button 的大小: <code>big</code>, <code>''</code>, <code>small</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>block</td>
                            <td>
                                Button 需要设置按钮宽度100%时添加: <code>block</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>Button 的点击事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>
                                Button 开启icon: <code>icon</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>iconType</td>
                            <td>
                                Button 的icon类型
                            </td>
                            <td>string</td>
                            <td>fc-loading-line</td>
                        </tr>
                        <tr>
                            <td>iconDirection</td>
                            <td>
                                Button 的icon方向: <code>left</code>, <code>right</code>
                            </td>
                            <td>string</td>
                            <td>left</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>Button 的自定义样式</td>
                            <td>object</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Button.Group 按钮组</h3>
                <p className="myT">默认样式: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button.Group>
                        <Button type="primary">button1</Button>
                        <Button type="danger">button2</Button>
                        <Button type="warning">button3</Button>
                    </Button.Group>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button.Group>
    <Button type="primary">button1</Button>
    <Button type="danger">button2</Button>
    <Button type="warning">button3</Button>
</Button.Group>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">添加cling可以让按钮间距为0:</p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button.Group cling>
                        <Button type="primary-ghost">button1</Button>
                        <Button type="danger-ghost">button2</Button>
                        <Button type="warning-ghost">button3</Button>
                    </Button.Group>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button.Group cling>
    <Button type="primary-ghost">button1</Button>
    <Button type="danger-ghost">button2</Button>
    <Button type="warning-ghost">button3</Button>
</Button.Group>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">
                    默认居中对齐，给最外层的Button.Group添加direction='left'或direction='right'可以设置左对齐或右对齐:
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button.Group cling direction="left">
                        <Button type="primary-ghost">button1</Button>
                        <Button type="danger-ghost">button2</Button>
                        <Button type="warning-ghost">button3</Button>
                    </Button.Group>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button.Group cling direction='left'>
    <Button type="primary-ghost">button1</Button>
    <Button type="danger-ghost">button2</Button>
    <Button type="warning-ghost">button3</Button>
</Button.Group>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">
                    给最外层的Button.Group添加size='small'或size='big'可以改变按钮组的尺寸:
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button.Group cling direction="right" size="big">
                        <Button type="primary-ghost">button1</Button>
                        <Button type="danger-ghost">button2</Button>
                        <Button type="warning-ghost">button3</Button>
                    </Button.Group>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button.Group cling direction='right' size='big'>
    <Button type="primary-ghost">button1</Button>
    <Button type="danger-ghost">button2</Button>
    <Button type="warning-ghost">button3</Button>
</Button.Group>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">把Button.Group放进一个Button.Group里可以做成一个更复杂的组件:</p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button.Group cling size="big">
                        <Button.Group>
                            <Button type="primary">button</Button>
                        </Button.Group>
                        <Button.Group>
                            <Button type="primary-ghost">button1</Button>
                            <Button type="danger-ghost">button2</Button>
                            <Button type="warning-ghost">button3</Button>
                        </Button.Group>
                    </Button.Group>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Button.Group cling size='big'>
    <Button.Group>
        <Button type="primary">button</Button>
    </Button.Group>
    <Button.Group>
        <Button type="primary-ghost">button1</Button>
        <Button type="danger-ghost">button2</Button>
        <Button type="warning-ghost">button3</Button>
    </Button.Group>
</Button.Group>`}
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
                            <td>cling</td>
                            <td>
                                添加cling可以让按钮间距为0: <code>cling</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>direction</td>
                            <td>
                                Button.Group 的对齐方式: <code>left</code>, <code>''</code>,{' '}
                                <code>right</code>
                            </td>
                            <td>string</td>
                            <td>''(居中)</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>
                                Button.Group 的大小: <code>small</code>, <code>''</code>,{' '}
                                <code>big</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                    </tbody>
                </table>
                <span style={{float: 'right'}}>创建-吴肖琪</span>
            </React.Fragment>
        );
    }
}

export default button;
