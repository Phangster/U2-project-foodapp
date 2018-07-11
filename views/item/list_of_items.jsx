var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

class listOfItems extends React.Component {
  render() {
    return (
      <LayoutContainer>
      <nav class="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
        <div class="container-fluid">
            <form class="nav navbar-header mr-auto" action='/category' method=
            'POST'><button class="glyphicon glyphicon-menu-left"></button></form>

            <a class="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px'}}>Menu</a>

            <form class="nav navbar-header ml-auto animated slideInRight" action='/user/cart' method='GET'><span>{this.props.user}</span><button class="glyphicon glyphicon-shopping-cart"></button></form>
        </div>
      </nav>
      <div style={{marginTop:'60px'}}> 
          <h4 class='text-center'>My list of items</h4>
          <ul>
            {this.props.items.map(item => (
                  <li>
                    <p style={{display:'inline-block'}}>{item.name}</p>
                    <p style={{display:'inline-block'}}>Quantity: {item.quantity}</p>
                  </li>
            ))}
          </ul>
        </div>
      </LayoutContainer>
    );
  };
};

module.exports = listOfItems;