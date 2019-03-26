import React, {Component} from 'react';
import styles from './Timer.module.sass';
import TimerPanel from "./../TimerPanel/TimerPanel"


// let clsForTimer="Timer-imgTimerContainer";
let hid = false;
let valuetmp = 0;
let hidTmp = true;
let valueTmp = 0;
let actionTmp = "reset";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hid: true,
            value: 0,
            action: ""
        }
    }

    hiddenTimer = () => {
        this.setState({
            action: "hidden",
            hid: !this.state.hid
        });
        // console.log("hiddenTimer");

    }
    resetTimer = () => {
        this.setState({
            action: "reset",
            value: 0
        });
        // console.log("resetTimer");
    }


    render() {
        // console.log("render timer container");
        return (
            <div className={styles["Timer-mainContainer"]}>
                <div className={styles["Timer-spanContainer"]}>
                    <span className={styles["Timer-span"]}>CHECK-OUT</span>
                </div>
                <div className={styles["Timer-imgTimerContainer"]}>
                    <img src="assets/velo.png" className={styles["Timer-img"]}/>
                    <TimerPanel hid={this.state.hid} value={this.state.value} action={this.state.action}/>
                </div>
                <div className={styles["Timer-hiddenButton"]} onClick={this.hiddenTimer}>Спрятать</div>
                <div className={styles["Timer-resetButton"]} onClick={this.resetTimer}>Перезапустить</div>
            </div>
        )

    }
}

export default Timer;