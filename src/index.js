import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './effect.css';
import './responsive.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/navBar';
import Sectionone from './component/hello';
import Chisono from './component/chisono';
import Lavori from './component/lavori';
import Separator from './component/separator';
import Skill from './component/skill';
import Footer from './component/footer';
import Copyright from './component/copyright';

import $ from 'jquery';

ReactDOM.render(
  <div class="inner-body" id="mousepassage">
    <Navbar></Navbar>
    <Sectionone></Sectionone>
    <Chisono></Chisono>
    <Lavori></Lavori>
    <Separator></Separator>
    <Skill></Skill>    
    <Footer></Footer>
    <Copyright></Copyright>
  </div>,
  document.getElementById('root')
);


              

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
