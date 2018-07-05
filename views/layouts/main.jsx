var React = require('react');

class LayoutContainer extends React.Component {
  render() {
    return (
        <html>
            <head>
                <title>Welcome to foodZilla</title>
            </head>
            <body>
                {this.props.children}
            </body>
        </html>
   		);
 	}
}
module.exports = LayoutContainer;
