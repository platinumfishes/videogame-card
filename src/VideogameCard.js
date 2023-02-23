import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class VideogameCard extends LitElement {
  static get properties() {
    return {
      accentColor: {type: String, reflect: true, attribute: 'accent-color'},
      opened: {type: Boolean, reflect: true, attribute: 'open-status'},
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
  this.accentColor = 'pink';
  this.opened = false;

  this.top= "Mmmph";
  this.name = "Team Fortress 2 Pyroland";
  this.picture = "https://images.gamebanana.com/img/ss/mods/54f8f277e231a.webp"
  this.details = "Details";
  this.paragraph1 = "This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2. The video is called 'Meet the Pyro'";
}

toggleDetails() {
  this.shadow
}

ToggleEvent(e) {
  const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true: false;
  this.opened = state;
  console.log(this.opened);
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
        <slot></slot>
  </details>
<meme-maker class="img" image-url="${this.picture}" top-text="${this.top}"></meme-maker>
</div>
</div>
<!-- End of Allen's card-->
  `;
  }
//--------------------------------------------HTML-RENDER-END---------------------------------------------------------------------------------

  //--------------------------------------------CSS-START---------------------------------------------------------------------------------
static get styles() {
  return css`

:host([open-status=false]) .card {
  background-color: white;
}

:host([accent-color='cyan']) .card {
  background-color: cyan;
  border: 14px solid #01E994;
}
:host([accent-color='pink']) .card {
  background-color: #FB94FE;
}:host([accent-color='orange']) .card {
  background-color: orange;
  border: 14px solid #E96D01;
}

.details {
  color: blue;
  font-family: "Monaco", Monospace;
  font-size: 20px;
  margin-left: 8px;
  margin-right: 8px;
  visibility: visible; //should he hidden by default
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

/*BELOW IS ALL ORIGINAL CARD SPACE*/

.card {
  width: 500px;
  height: 600px;
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
  padding: 10px;
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