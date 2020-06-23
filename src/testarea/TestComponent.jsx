import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from './testActions'
import { Button } from 'semantic-ui-react'
import { INCREMENT_COUNTER } from './testConstants'

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props //purely destructuring, not assigning
        return (
            <div>
                <h1>Test comp</h1>
                you see {data}
                <Button onClick={this.props.incrementCounter} positive content='Increment'></Button>
                <Button onClick={decrementCounter} negative content='Decrement'></Button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)

//https://react-redux.js.org/using-react-redux/connect-mapdispatch