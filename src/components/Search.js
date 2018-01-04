import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      display: {},
    };
  }
  componentDidMount() {
    fetch(
      `https://swapi.co/api/${this.props.match.params.search}/?page=${
        this.props.match.params.page
      }`,
    )
      .then(response => response.json())
      .then(json => {
        this.setState({display: json});
      });
  }
  render() {
    if (this.state.display) {
      return <div>{this.state.display}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Search
