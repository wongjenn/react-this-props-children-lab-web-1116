const React = require('react')

class ThemeDecorations extends React.Component {
  render(){

    console.log(this.props.theme)

    const childrenDecorations = React.Children.map( this.props.children, child => {
      return React.cloneElement(child,{
        className: this.props.theme
      })
    })

    return (
      <div>
        {childrenDecorations}
      </div>
    )
  }

}

module.exports = ThemeDecorations
