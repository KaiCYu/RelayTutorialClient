const React = require('react');
const { graphql, createFragmentContainer } = require('react-relay');

const { Row, Col, CardPanel } = require('react-materialize');

const Welcome = require('./Welcome');
const Card = require('./Card');
const UserEdit = require('./UserEdit');

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <CardPanel className="teal lighten-4 black-text">
              <Welcome userToGreet={this.props.appUser}/>
            </CardPanel>
          </Col>
        </Row>

        <Row>
          <Col s={12} m={3}>
            <CardPanel className="teal lighten-4 black-text">
              <Card />
            </CardPanel>
          </Col>
        </Row>

        <Row>
          <Col s={12} m={3}>
            <CardPanel className="teal lighten-4 black-text">
              <UserEdit activeUser={this.props.appUser}/>
            </CardPanel>
          </Col>
        </Row>
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