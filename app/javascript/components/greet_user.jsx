// app/assets/javascripts/components/greet_user.jsx`

window.GreetUser = React.createClass({
  render: function() {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
});
