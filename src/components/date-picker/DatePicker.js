import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import '../css/button.css';

const displayDaysPerMonth = year => {
    //定义每个月的天数，如果是闰年第二月改为29天
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
    }

    //以下为了获取一年中每一个月在日历选择器上显示的数据，
    //从上个月开始，接着是当月，最后是下个月开头的几天

    //定义一个数组，保存上一个月的天数
    let daysInPreviousMonth = [].concat(daysInMonth);
    daysInPreviousMonth.unshift(daysInPreviousMonth.pop());

    //获取每一个月显示数据中需要补足上个月的天数
    let addDaysFromPreMonth = new Array(12).fill(null).map((item, index) => {
        let day = new Date(year, index, 1).getDay();
        if (day === 0) {
            return 6;
        } else {
            return day - 1;
        }
    });

    //已数组形式返回一年中每个月的显示数据,每个数据为6行*7天
    return new Array(12).fill([]).map((month, monthIndex) => {
        let addDays = addDaysFromPreMonth[monthIndex],
            daysCount = daysInMonth[monthIndex],
            daysCountPrevious = daysInPreviousMonth[monthIndex],
            monthData = [];
        //补足上一个月
        for (; addDays > 0; addDays--) {
            monthData.unshift(daysCountPrevious--);
        }
        //添入当前月
        for (let i = 0; i < daysCount; ) {
            monthData.push(++i);
        }
        //补足下一个月
        for (let i = 42 - monthData.length, j = 0; j < i; ) {
            monthData.push(++j);
        }
        return monthData;
    });
};
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        let now = new Date();
        this.state = {
            year: now.getFullYear(),
            month: now.getMonth(),
            day: now.getDate(),
            hour: now.getHours() < 10 ? '0' + now.getHours() : now.getHours(),
            minute: now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes(),
            picked: false,
            datePicked:
                this.props.showNowDate && !this.props.showTimer
                    ? `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
                    : this.props.showNowDate && this.props.showTimer
                        ? `${now.getFullYear()}-${now.getMonth() +
                              1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
                        : '',
            timeSelector: false,
            showCalendar: false,
            showHour: false,
            showMinute: false,
        };
    }
    componentDidMount() {
        if (this.props.showNowDate) {
            this.props.onChange(this.state.datePicked);
        }
    }
    // 改变月份
    changeMonth(type) {
        if (type === 'next') {
            if (this.state.month === 11) {
                this.setState({
                    year: this.state.year + 1,
                    month: 0,
                });
            } else {
                this.setState({
                    month: this.state.month + 1,
                });
            }
        } else if (type === 'prev') {
            if (this.state.month === 0) {
                this.setState({
                    year: this.state.year - 1,
                    month: 11,
                });
            } else {
                this.setState({
                    month: this.state.month - 1,
                });
            }
        }
        this.setState({}, () => {
            this.renderDate();
        });
    }
    //改变年份
    changeYear(type) {
        let year = 0;
        if (type === 'prev') {
            year = this.state.year - 1;
        } else if (type === 'next') {
            year = this.state.year + 1;
        }
        this.setState({
            year: year,
        });
        this.setState({}, () => {
            this.renderDate();
        });
    }
    //更改时间 小时
    changeHour(val) {
        if (val > 23) {
            val = 23;
        } else if (val <= 0) {
            val = '00';
        }
        this.setState(
            {
                hour:
                    val.length < 2
                        ? '0' + val
                        : val.length > 2
                            ? val.substring(val.length - 2, val.length)
                            : val,
            },
            () => {
                this.renderDate();
            }
        );
    }
    clickChangeHour(type) {
        let hour = 0;
        if (type === 'add') {
            hour = Number(this.state.hour) + 1;
            if (hour > 23) {
                hour = '0';
            }
        } else if (type === 'cut') {
            hour = Number(this.state.hour) - 1;
            if (hour < 0) {
                hour = 23;
            }
        }
        this.setState(
            {
                hour:
                    hour < 10
                        ? '0' + hour
                        : hour.length > 2
                            ? hour.substring(hour.length - 2, hour.length)
                            : hour,
            },
            () => {
                this.renderDate();
            }
        );
    }
    //更改时间  分钟
    changeMinute(val) {
        if (val > 59) {
            val = 59;
        } else if (val <= 0) {
            val = '00';
        }
        this.setState(
            {
                minute:
                    val.length < 2
                        ? '0' + val
                        : val.length > 2
                            ? val.substring(val.length - 2, val.length)
                            : val,
            },
            () => {
                this.renderDate();
            }
        );
    }
    clickChangeMinute(type) {
        let minute = 0;
        if (type === 'add') {
            minute = Number(this.state.minute) + 1;
            if (minute > 59) {
                minute = '0';
            }
        } else if (type === 'cut') {
            minute = Number(this.state.minute) - 1;
            if (minute < 0) {
                minute = 59;
            }
        }
        this.setState(
            {
                minute:
                    minute < 10
                        ? '0' + minute
                        : minute.length > 2
                            ? minute.substring(minute.length - 2, minute.length)
                            : minute,
            },
            () => {
                this.renderDate();
            }
        );
    }
    handleDatePick(index, styleName) {
        let props = {viewData: displayDaysPerMonth(this.state.year)};
        let month = props.viewData[this.state.month];
        switch (styleName) {
            default:
                break;
            case 'thisMonth':
                this.datePick(month[index]);
                break;
            case 'prevMonth':
                this.changeMonth('prev');
                this.datePick(month[index]);
                // this.changeColor();
                break;
            case 'nextMonth':
                this.changeMonth('next');
                this.datePick(month[index]);
                // this.changeColor();
                break;
        }
    }
    //选择日期
    datePick(day) {
        this.setState(
            {
                day: day,
            },
            () => {
                this.renderDate();
            }
        );
    }
    //将日期渲染到输入框
    renderDate(e) {
        const {year, month, day, hour, minute} = this.state;
        this.setState(
            {
                datePicked: this.props.showTimer
                    ? `${year}-${month + 1}-${day} ${hour}:${minute}`
                    : `${year}-${month + 1}-${day}`,
            },
            () => {
                this.props.onChange(this.state.datePicked);
            }
        );
    }
    render() {
        const {year, month, day, hour, minute, showTimer, timeSelector} = this.state;
        let props = {viewData: displayDaysPerMonth(this.state.year)};
        let monthData = props.viewData[month],
            rowsInMonth = [],
            i = 0,
            styleOfDays = (() => {
                let i = monthData.indexOf(1),
                    j = monthData.indexOf(1, i + 1),
                    arr = new Array(42);
                arr.fill('prevMonth', 0, i);
                arr.fill('thisMonth', i, j);
                arr.fill('nextMonth', j);
                return arr;
            })();
        //把每一个月的显示数据以7天为一组等分
        monthData.forEach((day, index) => {
            if (index % 7 === 0) {
                rowsInMonth.push(monthData.slice(index, index + 7));
            }
        });
        let now = new Date();
        const nowMonth = now.getMonth(),
            nowDay = now.getDate(),
            nowyear = now.getFullYear();

        return (
            <div className="main" ref="main">
                <div className="calendarHeader clearfix">
                    <span
                        className="prevYear"
                        onClick={() => {
                            this.changeYear('prev');
                        }}
                    />
                    <span
                        className="prevMonth"
                        onClick={() => {
                            this.changeMonth('prev');
                        }}
                    >
                        <i className="left fc-arrow-left" />
                    </span>
                    <span
                        className="nextYear"
                        onClick={() => {
                            this.changeYear('next');
                        }}
                    />
                    <span
                        className="nextMonth"
                        onClick={() => {
                            this.changeMonth('next');
                        }}
                    >
                        <i className="left fc-arrow-right" />
                    </span>
                    <span className="dateInfo">
                        {showTimer
                            ? year +
                              '年' +
                              Number(month + 1) +
                              '月' +
                              day +
                              '日' +
                              hour +
                              ':' +
                              minute
                            : year + '年' + Number(month + 1) + '月' + day + '日'}
                    </span>
                </div>
                <table id="calendarMain">
                    <thead>
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowsInMonth.map((row, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {row.map(day => {
                                        return (
                                            <td
                                                className={
                                                    nowyear === year &&
                                                    nowMonth === month &&
                                                    nowDay === day
                                                        ? `${styleOfDays[i]} actived`
                                                        : this.state.day === day
                                                            ? `${styleOfDays[i]} selected`
                                                            : styleOfDays[i]
                                                }
                                                onClick={this.handleDatePick.bind(
                                                    this,
                                                    i,
                                                    styleOfDays[i]
                                                )}
                                                key={i++}
                                            >
                                                {day}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="calendarFooter clearfix">
                    {this.props.showTimer && !timeSelector ? (
                        <Button
                            style={{float: 'left'}}
                            onClick={e => {
                                this.setState({timeSelector: !this.state.timeSelector});
                            }}
                        >
                            选择时间
                        </Button>
                    ) : this.props.showTimer && timeSelector ? (
                        <div className="calendarTimer">
                            <div className="timerContent clearfix">
                                <span className="hourBox">
                                    <input
                                        type="number"
                                        value={hour}
                                        onMouseEnter={() => {
                                            this.setState({showHour: true});
                                        }}
                                        onMouseLeave={() => {
                                            this.setState({showHour: false});
                                        }}
                                        onInput={e => {
                                            this.changeHour(e.target.value);
                                        }}
                                        onChange={() => {}}
                                    />
                                    {this.state.showHour ? (
                                        <ul
                                            className="iconHour"
                                            onMouseEnter={() => {
                                                this.setState({showHour: true});
                                            }}
                                            onMouseLeave={() => {
                                                this.setState({showHour: false});
                                            }}
                                        >
                                            <li
                                                onClick={() => {
                                                    this.clickChangeHour('add');
                                                }}
                                            />
                                            <li
                                                onClick={() => {
                                                    this.clickChangeHour('cut');
                                                }}
                                            />
                                        </ul>
                                    ) : null}
                                </span>
                                <span>:</span>
                                <span className="minuteBox">
                                    <input
                                        type="number"
                                        value={minute}
                                        onMouseEnter={() => {
                                            this.setState({showMinute: true});
                                        }}
                                        onMouseLeave={() => {
                                            this.setState({showMinute: false});
                                        }}
                                        onInput={e => {
                                            this.changeMinute(e.target.value);
                                        }}
                                        onChange={() => {}}
                                    />

                                    {this.state.showMinute ? (
                                        <ul
                                            className="iconMinute"
                                            onMouseEnter={() => {
                                                this.setState({showMinute: true});
                                            }}
                                            onMouseLeave={() => {
                                                this.setState({showMinute: false});
                                            }}
                                        >
                                            <li
                                                onClick={() => {
                                                    this.clickChangeMinute('add');
                                                }}
                                            />
                                            <li
                                                onClick={() => {
                                                    this.clickChangeMinute('cut');
                                                }}
                                            />
                                        </ul>
                                    ) : null}
                                </span>
                            </div>
                            <span
                                className="cancel"
                                onClick={e => {
                                    this.setState({timeSelector: !this.state.timeSelector});
                                }}
                            >
                                ×
                            </span>
                        </div>
                    ) : null}

                    <Button type="primary" style={{float: 'right'}} onClick={()=>{ this.props.onSelect() }}>
                        确定
                    </Button>
                    <Button
                        style={{
                            float: 'right',
                            marginRight: 10,
                            color: '#0374ea',
                            borderColor: '#0374ea',
                        }}
                        onClick={() => {
                            this.props.onChange('');
                            this.setState({
                                year: now.getFullYear(),
                                month: now.getMonth(),
                                day: now.getDate(),
                                hour: now.getHours() < 10 ? '0' + now.getHours() : now.getHours(),
                                minute:
                                    now.getMinutes() < 10
                                        ? '0' + now.getMinutes()
                                        : now.getMinutes(),
                            });
                        }}
                    >
                        清空
                    </Button>
                </div>
            </div>
        );
    }
}
DatePicker.defaultProps = {
    showNowDate:true,
    onChange: () => {},
    onSelect:()=>{},
};
DatePicker.propTypes = {
    showNowDate: PropTypes.bool,
    showTimer: PropTypes.bool,
    onChange: PropTypes.func,
    onConfirm:PropTypes.func,
};
export default DatePicker;
