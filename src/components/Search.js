import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      display: {},
    };
  }
  componentWillUpdate() {
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

  display(json) {
    if (json.results) {
      switch (this.props.match.params.search) {
        case 'people':
          return json.results.map(item => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.mass}</li>
                <li>{item.height}</li>
                <li>{item.hair_color}</li>
              </ul>
            );
          });
        case 'planets':
          return json.results.map(item => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.rotation_period}</li>
                <li>{item.orbital_period}</li>
                <li>{item.diameter}</li>
                <li>{item.climate}</li>
                <li>{item.gravity}</li>
              </ul>
            );
          });
        case 'films':
          return json.results.map(item => {
            return (
              <ul>
                <li>{item.title}</li>
                <li>{item.episode_id}</li>
                <li>{item.opening_crawl}</li>
                <li>{item.director}</li>
                <li>{item.producer}</li>
                <li>{item.release_date}</li>
              </ul>
            );
          });
        case 'species':
          return json.results.map(item => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.classification}</li>
                <li>{item.designation}</li>
                <li>{item.average_height}</li>
                <li>{item.skin_colors}</li>
                <li>{item.hair_colors}</li>
              </ul>
            );
          });
        case 'species':
          return json.results.map(item => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.classification}</li>
                <li>{item.designation}</li>
                <li>{item.average_height}</li>
                <li>{item.skin_colors}</li>
                <li>{item.hair_colors}</li>
              </ul>
            );
          });
        case 'vehicles':
          return json.results.map(item => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.model}</li>
                <li>{item.manufacturer}</li>
                <li>{item.cost_in_credits}</li>
                <li>{item.length}</li>
                <li>{item.max_atmosphering_speed}</li>
                <li>{item.crew}</li>
                <li>{item.passengers}</li>
              </ul>
            );
          });
        case 'starships':
          return json.results.map(item => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.model}</li>
                <li>{item.manufacturer}</li>
                <li>{item.cost_in_credits}</li>
                <li>{item.length}</li>
                <li>{item.max_atmosphering_speed}</li>
                <li>{item.crew}</li>
                <li>{item.passengers}</li>
              </ul>
            );
          });
        default:
          return JSON.stringify(json);
      }
    } else {
      return <div>Loading...</div>;
    }
  }

  pagination() {
    let pageArray = [];
    if (this.state.display.next) {
      pageArray.push(
        <a href={`./${Number(this.props.match.params.page) +
            1}`}>
          {' '}
          Next{' '}
        </a>,
      );
    }
    pageArray.push(
      <a href={`./${Number(this.props.match.params.page)}`}>
        {' '}
        {this.props.match.page}{' '}
      </a>,
    );
    if (this.state.display.previous) {
      pageArray.push(
        <a href={`./${Number(this.props.match.params.page) -
            1}`}>
          {' '}
          Previous{' '}
        </a>,
      );
    }

    return <div>{pageArray}</div>;
  }

  render() {
    if (this.state.display) {
      //Remember --> you cannot render objects just like that! So, we use JSON.stringify here
      return <div>{this.display(this.state.display)}
      {this.pagination()}
      </div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Search;
