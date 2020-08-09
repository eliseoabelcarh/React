'use strict';

const e = React.createElement;



class LikeButton1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like1'
    );
  }
}



class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like2'
    );
  }
}



const domContainer1 = document.querySelector('#contenedor1');
const domContainer2 = document.querySelector('#contenedor2');
ReactDOM.render(e(LikeButton1), domContainer1);
ReactDOM.render(e(LikeButton2), domContainer2);