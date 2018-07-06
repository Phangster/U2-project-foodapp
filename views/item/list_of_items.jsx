var React = require("react");
var LayoutContainer = require('../layouts/main.jsx');

class listOfItems extends React.Component {
  render() {
    return (
      <LayoutContainer>
          <h4>My list of items</h4>
          <ul>
            {this.props.item.map(item => (
              <div>
                <li>
                  <p>Name: {item.name}</p>
                  <p>Item number: {item.num}</p>
                  <p>Price: ${item.price}</p>
                </li>
              </div>
            ))}
          </ul>
      </LayoutContainer>
    );
  };
};

module.exports = listOfItems;