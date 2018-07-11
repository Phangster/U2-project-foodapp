const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

const centeringTextInImage = {
	fontSize: '23px',
    position: 'absolute',
    display: 'block',
    zIndex: '1',
    top: '68%',
    left: '40%',
    color: 'black'
}

class categories extends React.Component {
	render(){
		return(
			<LayoutContainer>
			<nav class="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
			  <div class="container-fluid">
			      <form class="nav navbar-header mr-auto" action='' method=
			      'GET'><span class="glyphicon glyphicon-menu-hamburger"><span style={{visibility: 'hidden'}}>|</span></span></form>

			      <a class="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px'}}>Menu</a>

			      <form class="nav navbar-header ml-auto animated slideInRight" action="/user/cart" method='GET'><span>{this.props.user}</span><button type="submit" class="glyphicon glyphicon-shopping-cart counter"></button></form>
			  </div>
			</nav>

			<div style={{marginTop:'35px'}}>
				<ul style={{listStyle:'none', display:'inline'}}>
				{this.props.category.map(cat=>(
					<li>
						<form
						method='GET'
						action={'/category/' + cat.id}>
							<div class="col">
								<figure class="figure">
									<img src={cat.img} class="figure-img img-fluid rounded" style={{padding:'10px 25px 5px 25px', position:'relative'}}/>
									<input type='submit' value={cat.categories} name='Soba' style={centeringTextInImage}/>
								</figure>
							</div>	
						</form>
					</li>
				))}
				</ul>
			</div>
			</LayoutContainer>
		)
	}
}

module.exports = categories;