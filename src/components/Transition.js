import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

class TransitionComp extends Component {

    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <>
                <Transition
                    in={this.state.show}
                    timeout={{
                        enter: 2000,
                        exit: 50
                    }}

                    // enter={false}
                    // exit={false}

                    onEnter={() => {
                        console.log('ENTER')
                    }}

                    onExit={(node) => {
                        console.log('EXIT') // you can log node
                    }}

                >
                    {state => (
                        <div className={`square square-${state}`}>
                            {`square square-${state}`}
                        </div>
                    )}
                </Transition>
                <button
                    onClick={this.showDiv}
                >
                    toggle it
                </button>
            </>

        )
    }
}


export default TransitionComp;