const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

const centeringTextInImage = {
	fontSize: '23px',
    position: 'absolute',
    display: 'block',
    zIndex: '1',
    top: '50%',
    left: '45%',
    color: 'black',
    fontFamily: "'Fredoka One', cursive",
    color:'white'
}
const circleAddToCart = {
		width:'15px', 
		height:'15px', 
		background:'red', 
		borderRadius:'50%',
		position:'absolute',
		marginRight:'20%',
		top: '18%',
    	left: '93%',
    	color: 'white',
    	fontSize: '12px'
	}

class categories extends React.Component {
	render(){
		return(
			<LayoutContainer>
			
			<nav className="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
			  <div className="container-fluid"> 
			      <form className="nav navbar-header mr-auto" action='' method=
			      'GET'><span className="glyphicon glyphicon-menu-hamburger"><span style={{visibility: 'hidden'}}>***</span></span></form>

			      <a className="nav navbar-header animated slideInRight" style={{fontSize:'20px', fontFamily:"'Nova Oval', cursive", fontSize:'30px'}}>Menu</a>

			      <form className="nav navbar-header ml-auto animated slideInRight" action="/user/cart" method='GET'><span>{this.props.user}</span><button type="submit" className="glyphicon glyphicon-shopping-cart counter"></button></form>
			      {this.props.counter === undefined ? <div></div> : <div style={circleAddToCart} class='text-center animated slideInRight'>{this.props.counter}</div>}
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
								<figure className="figure">
									<img src={cat.img} class="figure-img img-fluid rounded" style={{padding:'10px 25px 5px 25px', position:'relative'}}/>
									<input type='submit'  value={cat.categories} style={centeringTextInImage}/>
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