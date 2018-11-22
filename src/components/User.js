import React, { Component } from 'react'

class User extends Component{
    render() {
        const { match } = this.props
        return (
          <p>
              User: {match.params.userId}
          </p>
        )
      }
}

export default User; 