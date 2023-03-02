import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

class VideogameCard extends LitElement {
  static properties() {
    return {
      accentColor: {type: String, reflect: true, attribute: 'accent-color'},
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
  this.accentColor = 'pink';
  this.opened = false;

  this.top= "Mmmph";
  this.name = "Team Fortress 2 Pyroland";
  this.picture = "https://images.gamebanana.com/img/ss/mods/54f8f277e231a.webp"
  this.details = "Details";
  this.paragraph1 = "This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2. The video is called 'Meet the Pyro'";
}

ToggleEvent(e) {
  const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true: false;
  this.opened = state;
}

updated(changedProperties){
  changedProperties.forEach((oldValue, propName)=>{
    if(propName === "opened"){
      this.dispatchEvent(new CustomEvent('opened-changed', {
        composed: true,
        bubbles: true,
        cancelable: false,
        detail:{
          value: this[propName]
        }
      }));
    }
  });
}

//--------------------------------------------HTML-RENDER-START---------------------------------------------------------------------------------
render() {
  return html`

<!-- Allen's Card-->
<div id="card1" class="card">
  <p id="header1" class="header">${this.name}</p>
  <meme-maker class="img" image-url="${this.picture}" top-text="${this.top}"></meme-maker>
  <details class="details" .open="${this.opened}" @toggle="${this.ToggleEvent}">
    <summary class="summary">${this.details}</summary>
        <slot class="list-item"></slot>
  </details>
</div>
<!-- End of Allen's card-->
  `;
  }
//--------------------------------------------HTML-RENDER-END---------------------------------------------------------------------------------

  //--------------------------------------------CSS-START---------------------------------------------------------------------------------
static get styles() {
  return css`
/* For Cyan (this has to be a better way to do this) */
:host([accent-color='cyan']) .card {background-color: cyan; border: 14px solid #00ff73;}
:host([accent-color='cyan']) .header {color: #00ff73; background-color: #00bdaa;}
:host([accent-color='cyan']) .summary {color: #00ff73; border: 2px dashed #00ff73; background-color: #00bdaa;}
:host([accent-color='cyan']) .img {border: 2px inset #45ffec; background-color: #00bdaa;}

:host([accent-color='orange']) .card {background-color: orange; border: 14px solid #E96D01;}
:host([accent-color='orange']) .header {color: #ff3819; background-color: #ffb82b;}
:host([accent-color='orange']) .summary {color: #ff3819; border: 2px dashed #e7ff70; background-color: #ffb82b;}
:host([accent-color='orange']) .img {border: 2px inset #e7ff70; background-color: #ff8b2b;}

:host([])

.list-item {
  position: absolute;
}

.details {
  color: blue;
  font-family: "Monaco", Monospace;
  font-size: 20px;
  margin-left: 8px;
  margin-right: 8px;
  visibility: visible; //should he hidden by default
  position: relative;
}

.summary { /*clickable part*/
  background-color: hotpink;
  color: #94FEFB;
  border: 2px dashed #94FEFB;
  border-radius: 40px;
  width: 120px;
  margin: auto;
  margin-top: 12px;
  padding: 4px;
}

/*BELOW IS ALL ORIGINAL CARD SPACE*/

.card {
  width: 500px;
  height: 560px;
  border: 14px solid pink;
  background-color: #FB94FE;
  text-align: center;
  border-radius: 20px;
  margin-left: 80px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: text-top;
}

.card:hover {
  -webkit-box-shadow:0px 0px 151px 0px rgba(45,255,196,0.55);
-moz-box-shadow: 0px 0px 151px 0px rgba(45,255,196,0.55);
box-shadow: 0px 0px 151px 0px rgba(45,255,196,0.55);
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
  border-radius: 14px;
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
customElements.define('videogame-card', VideogameCard);
