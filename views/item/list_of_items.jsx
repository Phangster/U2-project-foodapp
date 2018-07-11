var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

const buttonStyle= {
  width:'20px',
  height:'20px'
}
const inlineStyle = {
  display:'block',
}

const redButton = {
  fontSize:'20px', 
  color:'red', 
  padding:'5px', 
  margin:'0px', 
  padding: '0', 
  display:'inline-block'
}

const greenButton = {
  fontSize:'20px', 
  color:'green', 
  padding:'5px', 
  margin:'0px', 
  padding: '0', 
  display:'inline-block'
}
class listOfItems extends React.Component {
  render() {
    return (
      <LayoutContainer>
      <nav className="navbar navbar-default navbar-fixed-top" style={{background:'#b7eba0'}}>
        <div className="container-fluid">
            <form className="nav navbar-header mr-auto" action='/category' method=
            'POST'><button className="glyphicon glyphicon-menu-left"></button></form>

            <a className="nav navbar-header text-center animated slideInRight" style={{fontSize:'20px'}}><span style={{visibility: 'hidden'}}>***</span>Menu</a>

            <form className="nav navbar-header ml-auto animated slideInRight" action='/user/cart' method='GET'><span>{this.props.user}</span><button class="glyphicon glyphicon-shopping-cart"></button></form>
        </div>
      </nav>
      <div className='text-center' style={{marginTop:'60px'}}> 
          <h4 className='text-center'>My list of items</h4>
          <ul style={{listStyle:'none', padding:'0'}}>
            {this.props.items.map(item => (
                  <li>
                  <div>
                    <h5 style={{display:'block'}}>{item.name}</h5>
                    <p style={{display:'inline-block'}}>${item.price}</p>
                    <div style={inlineStyle}>
                    <form
                    method='POST'
                    action='/user/cart/edit'  
                    style={redButton}                  
                    >
                      <button name='subtraction'><i class="fas fa-minus-square subtraction"></i></button>
                    </form>
                      <p style={{display:'inline-block', margin:'0px'}} class='itemQuantity'>{item.quantity}</p>
                    <form
                    method='POST'
                    action='/user/cart/edit'
                    style={greenButton}                    
                    >
                      <button name='addition'><i class="fas fa-plus-square"></i></button>
                    </form>
                    </div>
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