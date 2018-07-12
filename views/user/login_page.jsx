var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

const center = {
  position: 'absolute',
  marginTop:'250px'
}

const loginButtonStyle = {
  background: '#b7eba0',
  borderRadius: '5px',
  marginTop: '20px',
}

const spacing = {
  marginTop: '10px !important'
}
const createAccSpacing = {
  marginTop: '-15px'
}

const buttonCreate = {
  padding: '0',
  border: 'none',
  background: 'none'
}

const imageSize = {
  width:'300px',
  height:'300px',
  position:'absolute',
}
class Home extends React.Component {
  render() {
    return (
      <LayoutContainer >
      <div style={imageSize}>
      <img src='/img/logo.png' class="img-fluid animated bounce"/>
      </div>
        <div style={center}>
            <form action ="/home" method='POST' class="text-center" style={{padding: '20px'}}>

              <div class="input-group input-group-lg">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-envelope"></span>
                </span>
                <input class="form-control" name= "email"type="text" placeholder="Email address"/>
              </div>

              <div class="input-group input-group-lg">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-lock"></span>
                </span>
                <input class="form-control" name="password" type="password" placeholder="Password"/>
              </div> 

              <div id="login" class="animated bounceInRight">
                <button style={loginButtonStyle} name="submit" type='submit'><a>Login</a></button>
              </div>

            </form>
            <p style={spacing} class="text-center">Don't have an account? Don't worry!</p>
            <form  style={createAccSpacing} class="text-center" action ="/user/new" method='GET'>
              <button style={buttonCreate} name="signup" type='submit'><u>Create an account</u></button>
            </form>
        </div>
      </LayoutContainer>
    );
  };
};

module.exports = Home;