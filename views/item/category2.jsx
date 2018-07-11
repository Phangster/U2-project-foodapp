const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

	const circleAddToCart = {
		width:'15px', 
		height:'15px', 
		background:'red', 
		borderRadius:'50%',
		position:'absolute',
		marginRight:'20%',
		top: '13%',
    	left: '93%'
	}

class soupItemPage extends React.Component {
	render(){
		return (
			<LayoutContainer>
			<nav class="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
			  <div class="container-fluid">
			      <form class="nav navbar-header mr-auto" action='/category' method=
			      'POST'><button class="glyphicon glyphicon-menu-left"><span style={{visibility: 'hidden'}}>|</span></button></form>

			      <a class="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px'}}>Soup</a>

			      <form class="nav navbar-header ml-auto animated slideInRight" action="/user/cart" method='GET'><span>{this.props.user}</span><button class="glyphicon glyphicon-shopping-cart"></button></form>
			      <div id='itemCount' style={circleAddToCart}>{this.props.counter}</div>
			  </div>
			</nav>

			<div class='text-center' style={{marginTop:'50px'}}>
			    <div>
          			<ul style={{listStyle:'none', display:'inline-block', padding:'0', margin:'0'}}>
           	 			{this.props.items.map((item) => { return (
							<li class="border-0" style={{padding:'10px', display:'inline-block', width:'200px', height:'200px'}}>
	                  			<img src={item.img} class="figure-img img-fluid rounded"/>
	                  			<p>{item.nameitem}</p>
	                  			<div>
	                    			<p style={{display:'inline-block', padding:'0px 15px 0px 5px'}}>${item.price}</p>
		                    		<form style={{display:'inline-block'}}
		               				method='POST'
		                    		action ={'/category/' + this.props.cat + '/additem/' + item.id}>
						    			<button type="submit" class="btn btn-success btn-sm"><span class='glyphicon glyphicon-plus'></span></button>
					    			</form>
			    				</div>
	 				        </li>
           	 			)})}
          			</ul>
        		</div>
        	</div>
		    </LayoutContainer>
    	)
	}
}

module.exports = soupItemPage;