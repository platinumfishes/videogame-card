import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
//, import.meta.url
let character = 'https://images.gamebanana.com/img/ss/mods/54f8f277e231a.webp';
//https://images.gamebanana.com/img/ss/mods/54f8f277e231a.webp
export class VideogameCard extends LitElement {
  static get properties() {
    return {
      opened: {type: Boolean, reflect: true},
      shadowstatus: {type: Boolean, reflect: true},
      top: {type: String, reflect: true},
      name: {type: String, reflect: true},
      details: {type: String, reflect: true},
      paragraph1: {type: String, reflect: true},
      paragraph2: {type: String, reflect: true},
    }
  }
constructor() {
  super();
  this.opened = false;
  this.top= "Mmmph";
  this.name = "Team Fortress 2 Pyroland";
  this.details = "Details";
  this.paragraph1 = "This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2. The video is called 'Meet the Pyro'";
}

ToggleEvent(e) {
  const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true: false;
  this.opened = state;
}
//--------------------------------------------HTML-RENDER-START---------------------------------------------------------------------------------
render() {
  return html`

<div class='wrapper'>
<!-- Allen's Card-->
<div id="card1" class="card">
  <p id="header1" class="header">${this.name}</p>
  <details class="details" .open="${this.opened}" @toggle="${this.ToggleEvent}">
    <summary class="summary">${this.details}</summary>
      <ul>
        <li><slot></slot></li>
      </ul>
  </details>
<!-- <img class="img" src=${character}> -->
<meme-maker class="img" image-url="${character}" top-text="${this.top}"></meme-maker>
</div>
</div>
<!-- End of Allen's card-->
  `;
  }

//--------------------------------------------HTML-RENDER-END---------------------------------------------------------------------------------

  //--------------------------------------------CSS-START---------------------------------------------------------------------------------
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
  margin-bottom: 20px;
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
  height: 260px;
  border: 2px inset #94FEFB;
  padding: 8px;
  background-color: #ff66cc;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
}

    .summary:hover,
    .summary:focus {
      color: hotpink;
      background-color: #94FEFB;
}
    .summary:active {
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
}