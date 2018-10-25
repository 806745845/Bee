import React, {Component} from 'react';
import Pagination from '../components/pagination';
import '../components/css/pagination.css';

class pagination extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Pagination 分页器</h1>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Pagination total={120} currentPage={1} pageSize={10} onChange={(current)=>{ console.log(current) }} />
                    <div className="addMT">
                        <code>{'<Pagination total={120} currentPage={1} pageSize={10}  />'}</code>
                    </div>
                </div>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Pagination total={120} currentPage={2} pageSize={10} onChange={(current)=>{ console.log(current) }} showQuickJumper />
                    <div className="addMT">
                        <code>
                            {'<Pagination total={120} currentPage={2} pageSize={10} showQuickJumper />'}
                        </code>
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
                            <td>total</td>
                            <td>数据总数（必需）</td>
                            <td>number</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>触发翻页函数</td>
                            <td>func</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>currentPage</td>
                            <td>当前页数</td>
                            <td>number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>pageSize</td>
                            <td>每页条数</td>
                            <td>number</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>showQuickJumper</td>
                            <td>是否可以快速跳转至某页</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{marginTop: 50, textAlign: 'right'}}>
                    创建 --- 张剑辉 <br /> 2018.8.23修改{' '}
                </div>
            </React.Fragment>
        );
    }
}
export default pagination;
