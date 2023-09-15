import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Posts from './components/Posts';
import img1 from '../src/img/post 1.jfif';
import img2 from '../src/img/post 2.jfif';
import img3 from '../src/img/post 3.jpg';
import img4 from '../src/img/post 4.jfif';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <SearchBar />
    

    <Posts fecha="3 agosto 24" likes="500" actor="Benjamín" 
    descripcion="But I must explain to you how all this mistaken idea of denouncing pleasure 
    and praising pain was born and I will give you a complete account of the system" 
    imagen={img1} num_comentarios="150"/>
    
    <Posts fecha="14 septiembre 22" likes="70" actor="Rodrigo" 
    descripcion="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi " 
    imagen={img2} num_comentarios="50"/>

<Posts fecha="12 noviembre 18" likes="10" actor="María" 
    descripcion="On the other hand, we denounce with righteous indignation and dislike men who are so 
    beguiled and demoralized by the charms of pleasure of the moment, so blinded" 
    imagen={img3} num_comentarios="20"/>

<Posts fecha="15 septiembre 24" likes="10" actor="Lorem" 
    descripcion="These cases are perfectly simple and easy to distinguish" 
    imagen={img4} num_comentarios="250"/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
