const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

class sobaItemPage extends React.Component {
	render(){
		const circleAddToCart = {
			width:'18px', 
			height:'18px', 
			background:'red', 
			borderRadius:'50%',
			position:'absolute',
			marginRight:'20%',
			top: '18%',
	    	left: '93%',
	    	color: 'white',
	    	fontSize: '12px'
		}

		return (
			<LayoutContainer>
			<nav className="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
			  <div className="container-fluid">
			      <form className="nav navbar-header mr-auto" action='/category' method=
			      'POST'><button className="glyphicon glyphicon-menu-left"><span style={{visibility: 'hidden'}}>**</span></button></form>

			      <a className="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px', fontFamily:"'Nova Oval', cursive"}}>SASHIMI</a>

			      <form className="nav navbar-header ml-auto animated slideInRight" action="/user/cart" method='GET'><span>{this.props.user}</span>
					<button class="glyphicon glyphicon-shopping-cart"></button></form>
					{this.props.counter === undefined ? <div></div> : <div style={circleAddToCart} class='text-center animated slideInRight'>{this.props.counter}</div>}
			  	</div>
			</nav>

			<div style={{marginTop:'60px'}}>
				<div className='text-center' >
          			<ul style={{listStyle:'none', display:'inline-block', margin:'0', padding:'0'}}>
           	 			{this.props.items.map((item) => { return (
		              			<li className="border-0" style={{padding:'10px', display:'inline-block', width:'200px', height:'200px'}}>
		                  			<img src={item.img} className="figure-img img-fluid rounded"/>
		                  			<p>{item.nameitem}</p>
		                    		<p style={{display:'inline-block', padding:'0px 15px 0px 5px'}}>${item.price}</p>
			                    	<form style={{display:'inline-block'}}
			               			method='POST'
			                    	action ={'/category/' + this.props.cat + '/additem/' + item.id} >
							    		<button type="submit" className="btn btn-success btn-sm add"><span className='glyphicon glyphicon-plus'></span></button>
						    		</form>
		 				        </li>
	 				      )})}
          			</ul>
          		</div>
        	</div>
		    </LayoutContainer>
    	)
	}
}

module.exports = sobaItemPage;