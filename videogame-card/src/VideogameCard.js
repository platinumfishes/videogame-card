import { LitElement, html, css } from 'lit';

export class VideogameCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
.details {
  color: blue;
  font-family: "Monaco", Monospace;
  font-size: 20px;
  margin-left: 8px;
  margin-right: 8px;
  visibility: hidden;
}

.summary { /*clickable part*/
  background-color: hotpink;
  color: #94FEFB;
  border: 2px dashed #94FEFB;
  border-radius: 40px;
  width: 120px;
  margin: auto;
  margin-bottom: 10px;
  padding: 4px;
}

.alt { /*alternative card for color toggle*/
  width: 500px;
  height: 565px;
  border: 14px solid #72fc79;
  background-color: cyan;
  text-align: center;
  border-radius: 20px;
  margin: auto;
}

.topbuttons {
  display: block;
  text-align: center;
}

button {
  font-size: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: #94FEFB;
  font-family: "Monaco", Monospace;
  border: 4px solid pink;
  border-radius: 20px;
}

/*BELOW IS ALL ORIGINAL CARD SPACE*/

.card {
  width: 500px;
  height: 565px;
  border: 14px solid pink;
  background-color: #FB94FE;
  text-align: center;
  border-radius: 20px;
  margin: auto;
  margin-bottom: 20px;
}

.header {
  color: #94FEFB;
  font-family: "Lucida Console", monospace;
  font-size: 30px;
  border: 2px solid;
  border-radius: 16px;
  Margin: 16px;
  padding: 8px;
  background-color: #ff66cc;
}

.img {
  width: 460px;
  height: 250px;
  border: 2px inset #94FEFB;
  padding: 8px;
  background-color: #ff66cc;
  border-radius: 20px;
}

.summary:hover,
.summary:focus,
.topbuttons button:hover,
.topbuttons button:focus {
  color: hotpink;
  background-color: #94FEFB;
}
.summary:active,
.topbuttons button:active {
  color: #94FEFB;
  background-color: #ec72fc
}

@media screen and (max-width: 800px) and (min-width: 500px) {
  .details {
    visibility: visible;
  }
}

@media screen and (max-width: 500px) {
  .card {
    width: auto;
    height: auto;
  }
  .img {
    width: 90%;
    height: auto;
  }
  .header{
    font-size: 4vw;
  }
  .details {
    font-size: 4vw;
    visibility: visible;
  }
}
    `;
  }

//--------------------------------------------CSS-END---------------------------------------------------------------------------------


  constructor() {
    super();
    this.title = 'My app';
  }

  duplicate(){
    const node1 = this.cloneNode(true);
    document.body.appendChild(node1);
  }

//--------------------------------------------HTML-RENDER-START---------------------------------------------------------------------------------

  render() {
    return html`
<div class='wrapper'>
<!-- Allen's buttons-->
  <div class="topbuttons">
    <button class="Duplicate">New duplicate</button>
    <button id="Color">Toggle color</button>
    <button id="Header">Change heading</button>
    <button id="Delete">Delete 1 card</button>
  </div>
<!-- Allen's Card-->
  <div id="card1" class="card">
    <p id="header1" class="header">Team Fortress 2 Pyroland</p>
    <details class="details">
      <summary class="summary">Details</summary>
        <ul>
          <li>This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2.</li>
          <li>The video is called "Meet the Pyro"</li>
      </ul>
    </details>
  <img class="img" src="https://images.gamebanana.com/img/ss/mods/54f8f277e231a.webp" alt="">
  </div>
</div>
<!-- End of Allen's card-->
    `;
  }
}
