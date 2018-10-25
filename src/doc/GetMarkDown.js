import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class GetMarkDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getData: '',
        };
    }

    componentDidMount() {
        if (this.props.url) {
            var _this = this;
            fetch(this.props.url, {method: 'get', dataType: 'jsonp'})
                .then(function(response) {
                    if (response.status !== 200) {
                        console.log('存在一个问题，状态码为：' + response.status);
                        return;
                    }
                    //检查响应文本
                    response.text().then(function(data) {
                        _this.setState({
                            getData: data,
                        });
                    });
                })
                .catch(function(err) {
                    _this.setState({
                        getData: 'Fetch错误:' + err,
                    });
                });
        }
    }

    render() {
        return (
            <React.Fragment>
                <a
                    style={{float: 'right', cursor: 'pointer'}}
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    返回
                </a>
                <ReactMarkdown escapeHtml={false} source={this.state.getData} />
            </React.Fragment>
        );
    }
}

export default GetMarkDown;
