const React = require('react');
const { graphql, createFragmentContainer } = require('react-relay');

class Welcome extends React.Component {
  render() {
    const {user} = this.props.userToGreet;
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h4>Hello, user {user.name}</h4>
        <div>Your ID is: {user.id}</div>
      </div>
    )
  }
}

module.exports = createFragmentContainer(
  Welcome,
  graphql`
  fragment Welcome_userToGreet on Viewer {
    user {
      name
      id
    }
  }
  `
);