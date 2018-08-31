import React, {Component} from 'react'

import {auth} from '../firebase/firebase'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  error: null,
}

export default class Register extends Component {
  state = INITIAL_STATE

  updateProperty = propertyName => e => {
    this.setState({[propertyName]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.props.history.push('login')
      })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.name}
          onChange={this.updateProperty('name')}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={this.state.email}
          onChange={this.updateProperty('email')}
          type="email"
          placeholder="Email"
        />
        <input
          value={this.state.password}
          onChange={this.updateProperty('password')}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>

        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    )
  }
}
