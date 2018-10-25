import React, {Component} from 'react';
import Input from '../components/input';
import '../components/css/input.css';
import Button from '../components/button';
import '../components/css/button.css';

class message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '冰歼',
            value2: '冰歼2',
            value3: '冰歼3',
            value4: '冰歼4',
            defaultValue: '冰歼default',
        };
    }
    render() {
        return (
            <React.Fragment>
                <h1>Input 输入框</h1>
                <p className="myT">默认宽度100%: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input placeholder="冰歼 冰歼" />
                    <div className="addMT">
                        <pre lang="javascript">{`<Input placeholder="冰歼 冰歼" />`}</pre>
                    </div>
                </div>
                <p className="myT">添加shadow，设置浅色背景: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input placeholder="冰歼 冰歼" shadow />
                    <div className="addMT">
                        <pre lang="javascript">{`<Input placeholder="冰歼 冰歼" shadow />`}</pre>
                    </div>
                </div>
                <p className="myT">给Input添加size='small'、size='big'改变尺寸: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input placeholder="冰歼 冰歼" size="small" />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Input placeholder="冰歼 冰歼" size='small' />`}
                        </pre>
                    </div>
                </div>
                <p className="myT">value实例: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input
                        placeholder="冰歼 冰歼"
                        size="small"
                        value={this.state.value1}
                        onChange={e => {
                            this.setState({
                                value1: e.target.value,
                            });
                        }}
                    />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Input placeholder="冰歼 冰歼" size='small' value = { this.state.value1 } onChange = { (e)=> {
    this.setState({
        value1: e.target.value
    })
}}/>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">defaultValue实例: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input
                        placeholder="冰歼 冰歼"
                        size="small"
                        defaultValue={this.state.defaultValue}
                    />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Input placeholder="冰歼 冰歼" size='small' defaultValue = { this.state.defaultValue } />`}
                        </pre>
                    </div>
                </div>
                <h3>API</h3>
                <p>组件提供了一些静态方法，使用方式和参数如下：</p>
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
                            <td>style</td>
                            <td>Input 的自定义样式</td>
                            <td>object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Input 的类型</td>
                            <td>string</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>shadow</td>
                            <td>
                                Input 设置浅色背景: <code>shadow</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>
                                Input 的大小: <code>small</code>, <code>''</code>, <code>big</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>Input 的原始自带placeholder</td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                Input 的值: <code>使用value时，应该配合onChange事件</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>defaultValue</td>
                            <td>
                                Input 的默认值:{' '}
                                <code>当defaultValue与value同时出现，defaultValue失效</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>Input 改变的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>Input 获得焦点的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>Input 失去焦点的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>Input 点击事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onKeyDown</td>
                            <td>Input 按下键盘的事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Input.Icon 带图标的输入框组</h3>
                <p>设置一个带图标的输入框</p>
                <p className="myT">默认: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input.Icon
                        left={<span className="icon fc-mobile" key="left" />}
                        right={<a href="javascript:;" className="icon fc-search" key="right" />}
                        placeholder="冰歼 冰歼"
                        size="big"
                        shadow
                        value={this.state.value2}
                        onChange={e => {
                            this.setState({value2: e.target.value});
                        }}
                    />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Input.Icon 
    left={<span className="icon fc-mobile" key='left'></span>}
    right={<a href='javascript:;' className="icon fc-search" key='right'></a>}
    placeholder="冰歼 冰歼" 
    size='big' 
    shadow
    value = { this.state.value2 } 
    onChange = { (e)=> { this.setState({ value2: e.target.value }) } } />`}
                        </pre>
                    </div>
                </div>
                <h3>API</h3>
                <p>组件提供了一些静态方法，使用方式和参数如下：</p>
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
                            <td>left</td>
                            <td>Input.Icon 左边的渲染</td>
                            <td>ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>right</td>
                            <td>Input.Icon 右边的渲染</td>
                            <td>ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>Input.Icon 的自定义样式</td>
                            <td>object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>shadow</td>
                            <td>
                                Input.Icon 设置浅色背景: <code>shadow</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>
                                Input.Icon 的大小: <code>small</code>, <code>''</code>,{' '}
                                <code>big</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>Input.Icon 的原始自带placeholder</td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                Input.Icon 的值: <code>使用value时，应该配合onChange事件</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>defaultValue</td>
                            <td>
                                Input.Icon 的默认值:{' '}
                                <code>当defaultValue与value同时出现，defaultValue失效</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>Input.Icon 改变的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>Input.Icon 获得焦点的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>Input.Icon 失去焦点的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>Input.Icon 点击事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onKeyDown</td>
                            <td>Input 按下键盘的事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Input.Group 输入框组</h3>
                <p>设置一个带图标的输入框</p>
                <p className="myT">默认: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input.Group
                        left={<span className="addon-text">+86</span>}
                        right={<Button type="primary">发送</Button>}
                        placeholder="冰歼 冰歼"
                        size="big"
                        value={this.state.value3}
                        onChange={e => {
                            this.setState({value3: e.target.value});
                        }}
                    />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Input.Group 
    left = {<span className="addon-text">+86</span>}
    right = { <Button type='primary'>发送</Button> }
    placeholder="冰歼 冰歼" 
    size='big' 
    value = { this.state.value3 } 
    onChange = { (e)=> { this.setState({ value3: e.target.value }) } } />`}
                        </pre>
                    </div>
                </div>
                <p className="myT">cling: 元素之间间距为0</p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input.Group
                        left={<span className="addon-text">+86</span>}
                        placeholder="冰歼 冰歼"
                        size="big"
                        cling
                        value={this.state.value4}
                        onChange={e => {
                            this.setState({value4: e.target.value});
                        }}
                    />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Input.Group 
    left = {<span className="addon-text">+86</span>}
    placeholder="冰歼 冰歼" 
    size='big' 
    cling
    value = { this.state.value4 } 
    onChange = { (e)=> { this.setState({ value4: e.target.value }) } } />`}
                        </pre>
                    </div>
                </div>
                <h3>API</h3>
                <p>组件提供了一些静态方法，使用方式和参数如下：</p>
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
                            <td>left</td>
                            <td>Input.Group 左边的渲染</td>
                            <td>ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>right</td>
                            <td>Input.Group 右边的渲染</td>
                            <td>ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>Input.Group 的自定义样式</td>
                            <td>object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>shadow</td>
                            <td>
                                Input.Group 设置浅色背景: <code>shadow</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>
                                Input.Group 的大小: <code>small</code>, <code>''</code>,{' '}
                                <code>big</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>cling</td>
                            <td>
                                Input.Group 元素之间间距为0: <code>cling</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>Input.Group 的原始自带placeholder</td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                Input.Group 的值: <code>使用value时，应该配合onChange事件</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>defaultValue</td>
                            <td>
                                Input.Group 的默认值:{' '}
                                <code>当defaultValue与value同时出现，defaultValue失效</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>Input.Group 改变的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>Input.Group 获得焦点的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>Input.Group 失去焦点的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>Input.Group 点击事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onKeyDown</td>
                            <td>Input 按下键盘的事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <span style={{float: 'right'}}>创建-吴肖琪   <br/> 2018.06.25 14:30 修改  张剑辉 </span>
            </React.Fragment>
        );
    }
}

export default message;
