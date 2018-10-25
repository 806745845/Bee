import React, {Component} from 'react';
import DatePicker from '../components/date-picker';
import DropDown from '../components/drop-down';
import Input from '../components/input';
import { getPostion } from '../util/getPosition';
import '../components/css/datePicker.css'
import '../components/css/input.css'
import '../components/css/dropdown.css'

class datePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position1: null,
            position2: null,
            firstVal: '',
            secondVal: '',
        };
    }
    getPosition1 = (e) => {
        this.setState({
            position1: getPostion(e.target),
        });
    }
    getPosition2(e) {
        this.setState({
            position2: getPostion(e.target),
        });
    }
    render() {
        return (
            <React.Fragment>
                <h1>DatePicker 日期时间选择框</h1>
                <p>
                    实现日期时间选择器，需要使用Input、DropDown和DatePicker这三个组件。Input组件实现输入框，DropDown组件（公用方法）实现下拉框位置根据输入框的位置而定位，DatePicker组件显示下拉框日期时间选择框内容。
                </p>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input
                        value={this.state.firstVal}
                        style={{width: 240}}
                        placeholder="请输入日期"
                        onClick={ this.getPosition1}
                        onChange={e => {
                            this.setState({firstVal: e.target.value});
                        }}
                    />
                    <DropDown position={this.state.position1} maskClosable={true}>
                        <DatePicker
                            showNowDate
                            onChange={value => {
                                this.setState({firstVal: value});
                            }}
                        />
                    </DropDown>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`
<Input value ={ this.state.firstVal || '' }
    style={{ width:240 }}
    placeholder="请输入日期"
    onClick={(e)=>{ this.getPosition1(e); }}
    onChange={(e)=>{this.setState({ firstVal:e.target.value })}}/>
<DropDown position={ this.state.position1 } >
    <DatePicker showNowDate onChange={(value)=>{ this.setState({ firstVal: value }) }} />
</DropDown>`}
                        </pre>
                    </div>
                </div>
                <div className="doc-example">
                    <p className="title">实例</p>
                    <Input
                        value={this.state.secondVal || ''}
                        style={{width: 240}}
                        placeholder="请输入日期"
                        onClick={e => {
                            this.getPosition2(e);
                        }}
                        onChange={e => {
                            this.setState({secondVal: e.target.value});
                        }}
                    />
                    <DropDown position={this.state.position2} childrenSize={{width:364,height:411}}>
                        <DatePicker
                            showNowDate
                            showTimer
                            onChange={value => {
                                this.setState({secondVal: value});
                            }}
                        />
                    </DropDown>
                    <div className="addMT">
                        <pre lang="javascript">
                            {`
<Input value ={ this.state.secondVal || '' }
    style={{ width:240 }}
    placeholder="请输入日期"
    onClick={(e)=>{ this.getPosition2(e); }}
    onChange={(e)=>{this.setState({ secondVal:e.target.value })}}/>
<DropDown position={ this.state.position2 } >
    <DatePicker  showNowDate showTimer onChange={(value)=>{ this.setState({ secondVal:value }) }} />
</DropDown>`}
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
                            <td>showNowDate</td>
                            <td>是否将默认值设置为当前日期时间</td>
                            <td>bool</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>showTimer</td>
                            <td>是否增加时间选择功能</td>
                            <td>bool</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>时间发生变化时的回调</td>
                            <td>function(value)</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{marginTop: 50, textAlign: 'right'}}>
                    创建 --- 张剑辉 <br /> 2018.6.12修改
                </div>
            </React.Fragment>
        );
    }
}
export default datePicker;
