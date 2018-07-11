var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

const buttonStyle= {
  width:'20px',
  height:'20px'
}
class listOfItems extends React.Component {
  render() {
    return (
      <LayoutContainer>
      <nav className="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
        <div className="container-fluid">
            <form className="nav navbar-header mr-auto" action='/category' method=
            'POST'><button className="glyphicon glyphicon-menu-left"></button></form>

            <a className="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px'}}>Menu</a>

            <form className="nav navbar-header ml-auto animated slideInRight" action='/user/cart' method='GET'><span>{this.props.user}</span><button class="glyphicon glyphicon-shopping-cart"></button></form>
        </div>
      </nav>
      <div style={{marginTop:'60px'}}> 
          <h4 className='text-center'>My list of items</h4>
          <ul style={{listStyle:'none'}}>
            {this.props.items.map(item => (
                  <li>
                  <div>
                    <p style={{display:'inline-block'}}>{item.name}</p>
                    <i style={{fontSize:'20px', color:'red', padding:'5px'}}class="fas fa-minus-square"></i>
                    <p style={{display:'inline-block'}}>{item.quantity}</p>
                    <i style={{fontSize:'20px', color:'green', padding:'5px'}}class="fas fa-plus-square"></i>
                  </div>
                  </li>
            ))}
          </ul>
        </div>
      </LayoutContainer>
    );
  };
};

module.exports = listOfItems;