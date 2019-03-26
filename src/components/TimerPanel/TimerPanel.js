import React, {Component} from 'react';
import styles from './TimerPanel.module.sass';

let secondsTmp = 0;
let minutesTmp = 0;
let hoursTmp = 0;
let clsHid = "TimerPanel-timerContainer";

class TimerPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hid: this.props.hid,
            value: this.props.value
        }

        setInterval(this.tick, 1000);
    }

    tick = () => {
        this.setState({
            value: this.state.value + 1
        });

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.action==="hidden"){
            this.setState({
                hid: nextProps.hid,
            });
        }
        else if(nextProps.action==="reset"){
            this.setState({
                value: nextProps.value
            });
        }

        if(nextProps.hid ){
            clsHid = "TimerPanel-timerContainer";
        }
        else{
            clsHid = "TimerPanel-hidden";
        }
    }

    timeInString() {
        let minutes = Math.floor(this.state.value / 60);
        let seconds = this.state.value - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if(minutes==60){
            this.setState({
                value: 0
            });
        }
        return (minutes + ":" + seconds);
    }


    render() {
        // console.log("render timer ");
        return (
            <div>
                <div className={styles[clsHid]}>
                        <span
                            className={styles["TimerPanel-timer"]}>{this.timeInString()}
                        </span>
                </div>
            </div>
        )
    }
}

export default TimerPanel;