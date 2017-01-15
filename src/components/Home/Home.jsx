import React, { Component } from 'react';
import { Link } from 'react-router';
import NewsArticles from './NewsArticles/NewsArticles.jsx';
import Official from './Official/Official.jsx';
import styles from './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOfficialsByAddress()
  }

  officialsList() {
    return this.props.officials.map((official, i) => {
      <Official
        key={i}
        official={official}
        name={official.name}
        party={official.party}
        phones={official.phones[0]}
        urls={official.urls[0]}
        img={official.photoUrl}
        facebook={official.channels[0].id}
        twitter={official.channels[1].id}
        clickMethod={this.props.changeOfficial}
      />
    });
  }

  render() {
    return (
      <div className='official'>
        <div className="official-list" onClick={() => this.props.clickMethod(props.official)}>
        <h1 >This is where the official list will live</h1>
        {this.officialsList()}
        <NewsArticles />
        </div>
      </div>
    );
  }
}

export default Home;
