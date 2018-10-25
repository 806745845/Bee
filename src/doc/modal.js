import React, {Component} from 'react';
import Button from '../components/button';
import '../components/css/button.css';
import Modal from '../components/modal';
import '../components/css/modal.css';

class modal extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            show1: false,
            show2: false,
            show3: false,
        };
    }
    render() {
        return (
            <React.Fragment>
                <h1>Modal 对话框</h1>
                <h3>何时使用</h3>
                <p>
                    唤醒Modal时，需要给body添加be-modal-active禁用页面滚动。另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的
                    Modal.confirm() 等方法。
                </p>
                <h3>tip</h3>
                <p>
                    1. 当Modal显示时，会在body中增加一个类名“modal-open”，Modal隐藏时会删除该类名。
                </p>
                <p>
                    2.
                    使用Modal的时候，Modal的显示、隐藏是从props传递进去的(isOpen)决定的，如果Modal中显示右上角的X，可以通过点击X来关闭Modal，并在DOM节点中删除Modal。如果要让点击按钮和蒙版自动关闭可以传入autoClose="true"即可。
                </p>
                <p>3. 使用Modal.method()的时候，调用方法时Modal显示，点击任意按钮关闭。</p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({show: true});
                        }}
                    >
                        show modal
                    </Button>
                    <Modal
                        title="DEMO"
                        isOpen={this.state.show}
                        onClose={() => {
                            this.setState({show: false});
                        }}
                        onCancel={() => {
                            this.setState({show: false});
                        }}
                    >
                        <code>console.log('冰歼')</code>
                    </Modal>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Modal  
    title='DEMO' 
    isOpen={this.state.show}
    onClose={()=> { this.setState({show: false}) }} 
    onCancel={()=> { this.setState({show: false}) }}>
    <code>console.log('冰歼')</code>
</Modal>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">
                    Modal默认水平居中，距离顶部60px
                    给Modal添加verticalMiddle设置垂直居中，超出高度时距离顶部60px:{' '}
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({show1: true});
                        }}
                    >
                        居中
                    </Button>
                    <Modal
                        verticalMiddle
                        title="DEMO"
                        isOpen={this.state.show1}
                        onClose={() => {
                            this.setState({show1: false});
                        }}
                        onCancel={() => {
                            this.setState({show1: false});
                        }}
                    >
                        <code>console.log('冰歼')</code>
                    </Modal>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Modal 
    verticalMiddle
    title='DEMO' 
    isOpen={this.state.show1} 
    onClose={()=> { this.setState({show1: false}) }} 
    onCancel={()=> { this.setState({show1: false}) }}>
    <code>console.log('冰歼')</code>
</Modal>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">
                    Modal默认宽度 600px
                    给Modal添加size='mini'、size='small'、size='big'、size='large'改变宽度，mini-360px，small-480px，big-720px，large-900px:{' '}
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({show2: true});
                        }}
                    >
                        small垂直居中
                    </Button>
                    <Modal
                        verticalMiddle
                        size="small"
                        title="DEMO"
                        isOpen={this.state.show2}
                        onClose={() => {
                            this.setState({show2: false});
                        }}
                        onCancel={() => {
                            this.setState({show2: false});
                        }}
                    >
                        <code>console.log('冰歼')</code>
                    </Modal>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Modal 
    verticalMiddle 
    size='small'
    title='DEMO' 
    isOpen={this.state.show2} 
    onClose={()=> { this.setState({show2: false}) }} 
    onCancel={()=> { this.setState({show2: false}) }}>
    <code>console.log('冰歼')</code>
</Modal>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">
                    Modal-footer内按钮默认右对齐，给Modal添加buttonCenter可设置Modal-footer按钮居中:{' '}
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({show3: true});
                        }}
                    >
                        footer按钮居中
                    </Button>
                    <Modal
                        buttonCenter
                        title="DEMO"
                        isOpen={this.state.show3}
                        onClose={() => {
                            this.setState({show3: false});
                        }}
                        onCancel={() => {
                            this.setState({show3: false});
                        }}
                    >
                        <code>console.log('冰歼')</code>
                    </Modal>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`<Modal 
    buttonCenter
    title='DEMO' 
    isOpen={this.state.show3} 
    onClose={()=> { this.setState({show3: false}) }} 
    onCancel={()=> { this.setState({show3: false}) }}>
    <code>console.log('冰歼')</code>
</Modal>`}
                        </pre>
                    </div>
                </div>
                <p className="myT">Modal.confirm()</p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Button
                        onClick={() =>
                            Modal.confirm({
                                title: 'DEMO',
                                content: 'Hello world!',
                                okText: '确认',
                                cancelText: '取消',
                                onOk: () => console.log('ok'),
                                onCancel: () => console.log('cancel'),
                                afterClose: () => console.log('close'),
                            })
                        }
                    >
                        show Modal.confirm
                    </Button>
                    <div className="addMT">
                        <pre>
                            {`<Button onClick={() => Modal.confirm({
    title: 'DEMO',
    content: 'Hello world!',
    okText: '确认',
    cancelText: '取消',
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel'),
    afterClose: ()=> console.log('close')
})}>show Modal.confirm</Button>`}
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
                            <td>isOpen</td>
                            <td>Modal 的状态</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>verticalMiddle</td>
                            <td>
                                Modal 需要垂直居中时添加: verticalMiddle:{' '}
                                <code>verticalMiddle</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>buttonCenter</td>
                            <td>
                                Modal foot按钮需要水平居中时添加: buttonCenter:{' '}
                                <code>buttonCenter</code>
                            </td>
                            <td>string</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>
                                Modal 的大小: <code>mini</code>, <code>small</code>, <code>''</code>,{' '}
                                <code>big</code>, <code>large</code>
                            </td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Modal 的标题</td>
                            <td>string|ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>Modal 的主体内容</td>
                            <td>string|ReactNode</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>afterClose</td>
                            <td>Modal 完全关闭后的回调</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>maskClosable</td>
                            <td>点击蒙版是否可以关闭</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>cancelText</td>
                            <td>关闭按钮文案</td>
                            <td>string||bool ( false 取消显示 )</td>
                            <td>Cancel</td>
                        </tr>
                        <tr>
                            <td>onCancel</td>
                            <td>点击关闭按钮回调函数</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>okText</td>
                            <td>确认按钮文案</td>
                            <td>string</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td>onOk</td>
                            <td>点击确认按钮回调函数</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>

                        <tr>
                            <td>autoClose</td>
                            <td>
                                点击“确认”，“取消”，“蒙版”，是否自动关闭Modal，并删除Modal,DOM节点(解决异步问题)
                            </td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>

                        <tr>
                            <td>closable</td>
                            <td>是否显示右上角的关闭按钮</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>点击右上角的关闭按钮的回调函数</td>
                            <td>function</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>showFooter</td>
                            <td>是否要显示footer</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Modal.method()</h3>
                <p>包括：</p>
                <ul>
                    <li>
                        <code>Modal.confirm</code>
                    </li>
                </ul>
                <p>以上均为一个函数，参数为 object，具体属性见上</p>
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
                            <td>isOpen</td>
                            <td>
                                Modal 的状态 (调用Modal.method()方法启动的Modal,此参数无效,取默认)
                            </td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>autoClose</td>
                            <td>
                                是否自动关闭Modal
                                (调用Modal.method()方法启动的Modal,此参数无效,取默认)
                            </td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <span style={{float: 'right'}}>创建-吴肖琪</span>
            </React.Fragment>
        );
    }
}

export default modal;
