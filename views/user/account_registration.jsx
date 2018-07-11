var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

const center = {
  marginTop: '20%',
}
const submitBtn = {
  marginTop: '20px',
  borderRadius: '10px',
  background: '#b7eba0'
}
class Edit extends React.Component {
  render() {
    return (
      <LayoutContainer>
      <div style={center}>
          <h2 class="text-center">Register Here!</h2><br/>
    			<form class="text-center" action ="/user/new" method='POST' style={{padding:'20px'}}>

          <div class="input-group input-group-lg">
            <span class="input-group-addon">
              <span class="glyphicon glyphicon-user"></span>
            </span>
            <input class="form-control" name="name" type="text" placeholder="Name"/>
          </div>

          <div class="input-group input-group-lg">
            <span class="input-group-addon">
              <span class="glyphicon glyphicon-envelope"></span>
            </span>
            <input class="form-control" name="email" type="text" placeholder="Email address"/>
          </div>

          <div class="input-group input-group-lg">
            <span class="input-group-addon">
              <span class="glyphicon glyphicon-lock"></span>
            </span>
            <input class="form-control" name="password" type="password" placeholder="Password"/>
          </div> 
    
    				<button style={submitBtn} class="border"><input name="submit" type='submit'/></button>

          </form>
      </div>
      </LayoutContainer>
    );
  };
};

module.exports = Edit;