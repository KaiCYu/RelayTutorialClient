const React = require('react');

const Welcome = require('./Welcome');
const Card = require('./Card');

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="SOME NAME"/>
        <Card />
      </div>
    )
  }
}

module.exports = App;