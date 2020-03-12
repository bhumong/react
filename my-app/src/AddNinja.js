import React, { Component } from 'react'

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null,
    }

    handleChange = (e) => {
        console.log([e.target.id]);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor='name'>Name : </label>
                    <input type='text' id='name' onChange={ this.handleChange }></input>
                    <label htmlFor='age'>age : </label>
                    <input type='text' id='age' onChange={ this.handleChange }></input>
                    <label htmlFor='belt'>belt : </label>
                    <input type='text' id='belt' onChange={ this.handleChange }></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default AddNinja;