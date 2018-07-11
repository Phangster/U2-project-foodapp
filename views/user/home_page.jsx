const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

class Home extends React.Component {
	render(){
		return (
			<LayoutContainer>
			<nav class="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
			  <div class="container-fluid text-center" style={{display: 'flex', justifyContent: 'center'}}>
			      <form class="nav navbar-header mr-auto animated slideInRight" action='' method=
			      'GET'><button class="glyphicon glyphicon-menu-hamburger"><span style={{visibility: 'hidden'}}>**</span></button></form>

			      <a class="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px', position:'absolute', textAlign: 'center'}}>Menu</a>

			      <form class="nav navbar-header ml-auto animated slideInRight" action="/user/cart" method='GET'><span>{this.props.user}</span><button class="glyphicon glyphicon-shopping-cart"></button></form>
			  </div>
			</nav>

			<form
			method='POST'
			action={'/category'}>
				<button style={{display: 'inlineBlock', position: 'absolute', top: '10%', right: '3%'}} type="submit" class="btn btn-secondary-sm">Skip</button>
			</form>


		    </LayoutContainer>
    	)
	}
}

module.exports = Home;