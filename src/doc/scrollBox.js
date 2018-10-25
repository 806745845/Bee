import React, {Component} from 'react';
import ScrollBox  from '../components/scroll-box';
import '../components/css/scrollBox.css';

class scrollBox extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>ScrollBox 滚动条</h1>
                <h3>如何使用</h3>
                <p>
                    使用此组件需设置滚动区域的宽高，若不设置宽高，则滚动区域大小默认为父标签区域大小。
                </p>
                <h5>垂直滚动</h5>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <ScrollBox style={{width: 300, height: 150, border: '1px solid #ddd'}}>
                        <p>测试</p>
                        <p>测试</p>
                        <p>测试</p>
                        <p>测试</p>
                        <p>测试</p>
                    </ScrollBox>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`
<ScrollBox style={{width:300,height:150,border:'1px solid #ddd'}} >
    <p>测试</p><p>测试</p><p>测试</p><p>测试</p><p>测试</p>
</ScrollBox>
                            `}
                        </pre>
                    </div>
                </div>
                <h5>水平滚动</h5>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <ScrollBox style={{width: 300, height: 150, border: '1px solid #ddd'}}>
                        <div style={{width: 600}}>测试测试测试测试测试测试测试测试测试</div>
                    </ScrollBox>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`
<ScrollBox style={{width:300,height:150,border:'1px solid #ddd'}}>
    <div style={{ width:600 }}>测试测试测试测试测试测试测试测试测试</div>
</ScrollBox>`}
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
                            <td>自定义滚动区域样式</td>
                            <td>object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>barColor</td>
                            <td>滚动条模块区域（可拖动区域），背景颜色</td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>barWidth</td>
                            <td>滚动条模块区域（可拖动区域）,宽度大小</td>
                            <td>object | string</td>
                            <td>6px</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{marginTop: 50, textAlign: 'right'}}>创建 --- 张剑辉</div>
            </React.Fragment>
        );
    }
}
export default scrollBox;
