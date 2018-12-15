import React from 'react';
import CountBlock from './../CountBlock';
import TimeDifference from './../../utils/TimeDifference';
import './CountDownTimer.css';

let timer;
const targetTime = new Date();
      targetTime.setDate(targetTime.getDate() + 5);

class CountDownTimer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            time: {}
        }
    }

    componentWillMount(){
        this.setState({time: TimeDifference(new Date(), targetTime) })
    }

    componentDidMount() {
        timer = setInterval( () => {
            this.setState({time: TimeDifference(new Date(), targetTime) })
        }, 1000);

    }

    componentWillUnmount(){
        clearInterval(timer);
    }

    render() {
        const { days, hours, minutes, seconds } = this.state.time;
        return(
            <section className="CountDownTimer">
                <h1>Count Down Timer</h1>
                <section className="CountDownTimer__wrapper">
                    <CountBlock title='Days' time={days}/>
                    <CountBlock title='Hours' time={hours}/>
                    <CountBlock title='Minutes' time={minutes}/>
                    <CountBlock title='Seconds' time={seconds}/>
                </section>
            </section>
        )
    }
}

export default CountDownTimer;