
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SinglePost from './components/SinglePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* we want to load the rout here */}
          {/* <Route path='/' component={Home} /> */}

          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>


            {/* Route parameter */}
            {/* <Route path="/:post_id([1-9][0-9]*)" element={<SinglePost />}></Route> */}

            <Route path="/:post_id" element={<SinglePost />}></Route>


          </Routes>

        </div>
      </BrowserRouter>


    );
  }
};

export default App;