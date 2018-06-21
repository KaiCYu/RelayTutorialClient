const React = require('react');
const { graphql, createFragmentContainer } = require('react-relay');

const Welcome = require('./Welcome');
const Card = require('./Card');
const UserEdit = require('./UserEdit');

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome userToGreet={this.props.appUser}/>
        <Card />
        <UserEdit activeUser={this.props.appUser}/>
      </div>
    )
  }
}

module.exports = createFragmentContainer( App, {
  appUser: graphql`
    fragment App_appUser on Viewer {
      ...Welcome_userToGreet
      ...UserEdit_activeUser
    }
    `
  }
);