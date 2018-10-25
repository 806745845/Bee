import React, {Component} from 'react';
import Select from '../components/select';
import '../components/css/select.css';

class select extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Select 选择框</h1>
                <p className="myT">默认样式: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Select
                        onClick={e => {
                            console.log('click');
                        }}
                    />
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Select onClick={ (e)=> {console.log('click');} } />`}
                        </pre>
                    </div>
                </div>
                <p className="myT">
                    添加type='primary'、type='warning'、type='danger'、type='success'、type='shadow'设置样式:{' '}
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Select type="success" />
                    <div className="addMT">
                        <pre lang="javascript">{`<Select type='success'/>`}</pre>
                    </div>
                </div>
                <p className="myT">
                    添加'simple'设置成简单样式，不与primary、warning、danger、success、shadow兼容:{' '}
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Select simple />
                    <div className="addMT">
                        <pre lang="javascript">{`<Select simple/>`}</pre>
                    </div>
                </div>
                <p className="myT">添加disabled禁用下拉框: </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Select simple disabled />
                    <div className="addMT">
                        <pre lang="javascript">{`<Select simple disabled/>`}</pre>
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
                            <td>style</td>
                            <td>Input 的自定义样式</td>
                            <td>object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>
                                Input 的样式: <code>default</code>, <code>primary</code>,{' '}
                                <code>success</code>, <code>warning</code>, <code>danger</code>,{' '}
                                <code>shadow</code>
                            </td>
                            <td>string</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>simple</td>
                            <td>
                                Input
                                设置成简单样式，不与primary、warning、danger、success、shadow兼容:{' '}
                                <code>simple</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>
                                Input 的大小: <code>big</code>, <code>''</code>, <code>small</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>
                                Input 禁用下拉框: <code>disabled</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>direction</td>
                            <td>
                                Input 图标的方向: <code>down</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>
                                placeholder
                            </td>
                            <td>string</td>
                            <td>请选择</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>
                                value
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>Input 的点击事件</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Select.List 选择框列表</h3>
                <p>type='list'实例：</p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Select.List>
                        <ul>
                            <li>
                                <div className="select-item expand active">
                                    电视<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand disabled">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                        </ul>
                    </Select.List>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Select.List>
    <ul>
        <li>
            <div className="select-item expand active">电视<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand disabled">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
    </ul>
</Select.List>`}
                        </pre>
                    </div>
                </div>
                <p>type='cascader'实例：</p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Select.List type="cascader">
                        <ul>
                            <li>
                                <div className="select-item expand active">
                                    电视<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand disabled">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                            <li>
                                <div className="select-item expand">
                                    家庭影音<i className="fc-arrow-right" />
                                </div>
                            </li>
                        </ul>
                    </Select.List>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Select.List type='cascader'>
    <ul>
        <li>
            <div className="select-item expand active">电视<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand disabled">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
        <li>
            <div className="select-item expand">家庭影音<i className="fc-arrow-right"></i></div>
        </li>
    </ul>
</Select.List>`}
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
                            <td>style</td>
                            <td>Input 的自定义样式</td>
                            <td>object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>
                                Input 的样式: <code>list</code>, <code>cascader</code>
                            </td>
                            <td>string</td>
                            <td>list</td>
                        </tr>
                    </tbody>
                </table>
                <span style={{float: 'right'}}>创建-吴肖琪</span>
            </React.Fragment>
        );
    }
}

export default select;
