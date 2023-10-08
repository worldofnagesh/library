import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import PageHeading from "../PageHeading";
import menuimage from '../Images/icons8-menu-50.png'
import cartimage from '../Images/icons8-buying-50.png'
import search from '../Images/search.svg'
import { useParams } from 'react-router-dom';

function Home() {

    const {id} = useParams();
    

  return (
    <div class="container">
    <div class="header"> 
      <div>
        <div className="text-pageheading">MAYBANK LIBRARY</div>
      </div>
      <hr class="line"></hr>
      <div class="secondheading">
        <div class="image"><a href={"/menu/"+id}  ><img class="icon" src={menuimage} alt="" /></a></div>
        <div class="middle-section">
            <input class="search-bar" type="text" placeholder="Search"/>
            <button class="search-button">
                <img class="search-icon" src={search}/>
            </button>
        </div>
        <div class="image"><a href="/cart" ><img class="icon" src={cartimage} alt="" /></a></div>
      </div>
      <hr class="line"></hr>
    </div>
    <div class="video-grid">
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src={cartimage}/>
        </div>
        <div class="video-info-grid">
          <div class="video-info">
            <p class="video-title">
              Talking Tech and AI with Google CEO Sundar Pichai!
            </p>
            <p class="video-author">
              Marques Brownlee
            </p>
            <p class="video-stats">
              3.4M views &#183; 6 months ago
            </p>
          </div>
        </div>
      </div>
      </div> 
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src={cartimage}/>
        </div>
        <div class="video-info-grid">
          <div class="video-info">
            <p class="video-title">
              Talking Tech and AI with Google CEO Sundar Pichai!
            </p>
            <p class="video-author">
              Marques Brownlee
            </p>
            <p class="video-stats">
              3.4M views &#183; 6 months ago
            </p>
          </div>
        </div>
      </div> 
    </div>

    
  );
}

export default Home;

