const React = require('react');

class myListOfItems extends React.Component {
  render() {
    return (
      <html>
        <head/>
        <body>
          <h1>Shopping time</h1>
            <div class="simpleCart_shelfItem">
                <img src="/images/item_thumb.jpg" class="item_thumb" />
                <h2 class="item_name"> Awesome T-shirt </h2>
              <select class="item_size">
                    <option value="Small"> Small </option>
                    <option value="Medium"> Medium </option>
                    <option value="Large"> Large </option>
                </select>
                <input type="text" value="1" class="item_Quantity"/>
                <span class="item_price">$35.99</span>
              <a class="item_add" href="javascript:;"> Add to Cart </a>
            </div>
        <script src = 'simpleCart.js'></script>
        </body>
      </html>
    );
  }
}

module.exports = myListOfItems;