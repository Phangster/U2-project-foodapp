const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

class Home extends React.Component {
	render(){
		console.log(this.props);
		return (
			<LayoutContainer>
				<h1>Home page</h1>
				<h3>Hello and welcome back again {this.props.user} Good to have you back</h3>
				    <form action ="/user/cart" method='GET'>
				    	<button>View list of items in your cart</button>
			    	</form>
			    	<div>
          				<ul>
           	 				{this.props.item.map(item => (
            				<div>
	              				<li>
	                  				<p>Name: {item.name}</p>
	                  				<p>Item number: {item.num}</p>
                    				<p>Price: ${item.price}</p>
                    				<form 
                    				method='POST'
                    				action ={'/user/additem/' + item.id} >
                    					<input name='id' type="hidden" value = {item.id}/>
				    					<button>Add</button>
			    					</form>
	 				        	</li>
 				      		</div>
            			))}
          				</ul>
        			</div>
		    </LayoutContainer>
    	)
	}
}

module.exports = Home;