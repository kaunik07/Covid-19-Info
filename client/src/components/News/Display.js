import React, { Component } from 'react';
import axios from 'axios';

class Display extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: []
    };
  }

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ url: `http://newsapi.org/v2/everything?domains=who.int&language=en&apiKey=7530f36a6fcf4ecda75ab4eb1213a9ee` });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    axios
      .get(`http://newsapi.org/v2/everything?domains=who.int&language=en&apiKey=7530f36a6fcf4ecda75ab4eb1213a9ee`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                
                  <div>
                  <p align="center">{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Display;
