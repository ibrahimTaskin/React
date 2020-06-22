import React, { Component } from 'react'

export default class formExams extends Component {
    state={
        username:''
    }

    onChangeHandler=(event)=>{
this.setState({username:event.target.value});
    }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.onChangeHandler} type="text"></input>
                </form>
        <h3> {this.state.username}</h3>
            </div>
        )
    }
}
