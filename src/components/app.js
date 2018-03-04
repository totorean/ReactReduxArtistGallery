import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import About from './about';
import ImageList from './image-list';

const PrimaryLayout = () => {
    return (
        <div className="primary-layout">
            <Header />
            <Route path="/" exact component={About} />
            <Route path="/pencils" component={ImageList} />
            <Footer />
        </div>
    );
}

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <PrimaryLayout />
        </BrowserRouter>
    );
  }
}
