import React from 'react';
import { render as r } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter';

import Map from './Map';
import Gallery from './Gallery';


const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Map} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </main>
);

const Menu = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Карта</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        <li><Link to="/counter">Отзывы</Link></li>
      </ul>
    </nav>
  </header>
);
const App = () => (
  <div><Menu /><Content />
  </div>);

r(
  <BrowserRouter><App /></BrowserRouter>,
  document.querySelector('.cont'),
);
