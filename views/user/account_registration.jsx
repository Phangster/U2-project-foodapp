var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

class Edit extends React.Component {
  render() {
    return (
      <LayoutContainer>
          <h4>Registration</h4>
    			<form action ="/user/new" method='POST'>
            <input name="name" type='text' placeholder='name'/>
    				<input name="email" type='text' placeholder='email'/>
    				<input name="password" type='text' placeholder='password'/>
    				<input name="submit" type='submit'/>
          </form>
      </LayoutContainer>
    );
  };
};

module.exports = Edit;