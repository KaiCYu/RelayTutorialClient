const React = require('react')
const environment = require('./environment');
const { graphql, commitMutation, createFragmentContainer } = require('react-relay');

const mutation = graphql`
  mutation UserEditComponentMutation($newName: String, $userId: ID) {
    changeUserName(newName: $newName, userId: $userId) {
      id
      name
    }
  }
`;

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    const {user} = this.props.activeUser;
    this.state = { content: '', userId: user.id};
  }

  onSubmit(event) {
    event.preventDefault();
    this.changeUserName(this.state.content, this.state.userId);
  }

  changeUserName(newName, userId) {
    const variables = {
      newName,
      userId,
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (res) => {
        console.log('Success!');
      },
      onError: (err) => {
        console.error(err)
      }
    });
  }

  render () {
    return (
      <div> 
        <span>Hi from User edit component</span>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>User Edit Form:</label>
          <input type="text" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
        </form>
      </div>
    )
  }
}

module.exports = createFragmentContainer( UserEdit,
  graphql`
    fragment UserEdit_activeUser on Viewer {
      user {
        id
      }
    }
  `
);