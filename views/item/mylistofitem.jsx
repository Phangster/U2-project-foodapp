const React = require('react');
var LayoutContainer = require('../layouts/main.jsx');

class myListOfItems extends React.Component {
  render() {
    return (
      <LayoutContainer>
      <h1>Your Cart</h1>
      <form>
          <ul>
            {this.props.addedItem.map(item => (
            	<div>
	              	<li>
	                  <p>Name: {item.name}</p>
	                  <p>Item number: {item.num}</p>
                    <p>Price: ${item.price}</p>
	 				        </li>
 				      </div>
            ))}
          	</ul>
        </form>
      </LayoutContainer>
    );
  }
}

module.exports = myListOfItems;