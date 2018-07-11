const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

class Home extends React.Component {
	render(){
		return (
			<LayoutContainer>
			<nav className="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
			  <div className="container-fluid text-center" style={{display: 'flex', justifyContent: 'center'}}>
			      <form className="nav navbar-header mr-auto animated slideInRight" action='' method=
			      'GET'><button className="glyphicon glyphicon-menu-hamburger"></button></form>

			      <a className="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px', position:'absolute', textAlign: 'center'}}><span style={{visibility: 'hidden'}}>*****</span>Promotion</a>
			      <form className="nav navbar-header ml-auto animated slideInRight" action="/user/cart" method='GET'><span>{this.props.user}</span><button className="glyphicon glyphicon-shopping-cart"></button></form>
			  </div>
			</nav>

			<form
			method='POST'
			action={'/category'}>
				<button style={{display: 'inlineBlock', position: 'absolute', top: '11%', right: '3%', fontSize: '30px', color:'#b7eba0'}} type="submit"><i class="fas fa-arrow-alt-circle-right"></i></button>
			</form>

			<div style={{width:'100%', height:'100vh', marginTop: '90px'}} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner" role="listbox" style={{marginTop: '10%'}}>
			    <div class="carousel-item active">
			      <img class="d-block img-fluid" src="./img/promo/sushi_promo1.jpg" alt="First slide"/>
			    </div>
			    <div class="carousel-item">
			      <img class="d-block img-fluid" src="./img/promo/sushi_promo2.jpg" alt="Second slide"/>
			    </div>
			    <div class="carousel-item">
			      <img class="d-block img-fluid" src="./img/promo/sushi_promo3.jpg" alt="Third slide"/>
			    </div>
			  </div>
			  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="sr-only">Next</span>
			  </a>
			</div>
		    </LayoutContainer>
    	)
	}
}

module.exports = Home;