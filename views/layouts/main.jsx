var React = require('react');

const bodyStyle = {
    width:'100%',
    height:'100vh',
    background: '#e7e8e4',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
}

const htmlStyle = {
    margin: '0',
    padding: '0',
    textDecoration: 'none',
    listStyle: 'none',
}

class LayoutContainer extends React.Component {
  render() {
    return (
        <html lang="en" style={htmlStyle}>
            <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel='icon' href='/img/logo.png' type='image/png'/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"/>
            <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Aclonica|Fredoka+One|Mandali|Nova+Oval" rel="stylesheet"/>
            <link rel="stylesheet" href="/css/style.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

            <title>Welcome to foodZilla</title>
            </head>
            <body style={bodyStyle}>
                {this.props.children}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
            </body>
        </html>
   		);
 	}
}
module.exports = LayoutContainer;
