const React = require('react')

class Invitation extends React.Component {
  render(){
      const childrenInvited = React.Children.map(this.props.children, child => {
        return (
          <li>{child}</li>
        )
      })

    return (
      <div>
        <h1>You've been invited!</h1>
        <ul>
          {childrenInvited}
        </ul>
      </div>
    )
  }
}

module.exports = Invitation
