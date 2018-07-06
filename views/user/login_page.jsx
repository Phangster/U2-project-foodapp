var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

class Home extends React.Component {
  render() {
    return (
      <LayoutContainer>
          <h4>Welcome to Home page</h4>
          <form action ="/home" method='POST'>
            <input name="email" type='text' placeholder='email'/>
            <input name="password" type='text' placeholder='password'/>
            <button name="submit" type='submit'>Login</button>
          </form>
          <form action ="/user/new" method='GET'>
            <button name="signup" type='submit'>Create an account</button>
          </form>
      </LayoutContainer>
    );
  };
};

module.exports = Home;