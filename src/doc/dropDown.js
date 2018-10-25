import React, {Component} from 'react';
import DropDown from '../components/drop-down';
import Input from '../components/input';
import {getPostion} from '../util/getPosition';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            position: null,
        };
    }
    getPosition(e) {
        this.setState({
            position: getPostion(e.target),
        });
    }
    render() {
        return (
            <React.Fragment>
                <h1>DropDown 组件（配合getPostion.js 方法使用）</h1>
                <p>
                    {' '}
                    此组件是一个公共定位组件。功能是实现此组件下的子组件，依照参照物位置，在页面上定位显示。使用时，需要引入公用方法getPosition.js。{' '}
                </p>
                <h3>DropDown</h3>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input
                        style={{width: 240}}
                        placeholder="点击"
                        onClick={e => {
                            this.getPosition(e);
                        }}
                    />
                    <DropDown position={this.state.position}>
                        <div
                            style={{
                                width: 300,
                                height: 240,
                                border: '1px solid #0374ea',
                                backgroundColor: 'white',
                            }}
                        >
                            {' '}
                            我是下拉内容，点击我之外的区域，你就看不见我了{' '}
                        </div>
                    </DropDown>
                </div>
                <div className="addMT">
                    <pre>{`
getPosition(e){
    this.setState({
        position: getPostion(e.target)
    })
}

<Input style={{width:240}}  onClick={(e)=>{ this.getPosition(e) }}/>
<DropDown position={this.state.position}>
    <div style={{ width:300,height:240,border: '1px solid #0374ea',backgroundColor:'white' }}>
        我是下拉内容，点击我之外的区域pDo看不见我了
    </div>
</DropDown>
                    `}</pre>
                </div>
                <div>
                    <h6>说明：</h6>
                    <p>
                        上述例子中，点击Input输入框的时候，触发getPosition函数，传入Input输入框节点，再调用方法bottom()，获取到的就是一个位于Input正下方的位置。然后将这个获取到的位置传入DropDown组件的属性position，最后，DropDown组件下的子组件\子元素节点，将展示在Input节点的正下方
                    </p>
                </div>

                <h3>dronDown.js</h3>
                <p>在页面中引入dronDown.js。</p>
                <pre lang="javascript">{`import {getPosition} from  '../util/getPosition'`}</pre>
                <p>
                    {' '}
                    使用时，需要先实例化 <i>new dropDown()</i>, 再传入参照物的节点{' '}
                    <i> new dropDown(e.target)</i>，再调用相对于参照物的方位方法{' '}
                    <i>new dropDown(e.target).bottom()。</i>
                    <em style={{color: 'red'}}>按本文中的第一个例子，参照物就是Input组件</em>
                </p>
                <div style={{marginTop: 10}}>
                    <p>bottom() 相对于参照物正下方；</p>
                    <p>top() 相对于参照物正上方；</p>
                    <p>left() 相对于参照物正左方；</p>
                    <p>right() 相对于参照物正右方</p>
                </div>
                <div style={{marginTop: 50, textAlign: 'right'}}>创建 --- 张剑辉</div>
            </React.Fragment>
        );
    }
}
