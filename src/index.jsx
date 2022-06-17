// import React from "react";
// //import "./styles.css";
// import YoutubeEmbed from "./components/youtubeEmbed.js";

// class leagueVidSite extends React.Component {
//   render() {
//     return (
//       <div className="league-vid-site">
//         <h1>Youtube Embed</h1>
//         <YoutubeEmbed embedId="rokGy0huYEA" />
//       </div>
//     );
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';

// Component(s)
import YoutubeEmbed from './components/youtubeEmbed'

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class leagueVidSite extends React.Component {
  render() {
    return (
      <div className="league-vid-site">
        <div>Welcome to the League of Teeple</div>
        <YoutubeEmbed embedId='fczLG_rEoAw' />
        <div>Bitches</div>
      </div>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(leagueVidSite), container);