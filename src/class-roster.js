import { LitElement, html, css } from 'lit';
import "./videogame-card.js";

class ClassRoster extends LitElement {
    static get tag() {
        return 'class-roster';
    }

    static get properties() {
      return {
        classes: {type: Array, reflect: true},
        header: {type: String, reflect: true},
        accentColor: {type: String, reflect: true, attribute: 'accent-color'},
        opened: {type: Boolean, reflect: true},
        shadowstatus: {type: Boolean, reflect: true},
        toptext: {type: String, reflect: true},
        name: {type: String, reflect: true},
        detailstext: {type: String},
        picture: {type: String}
      }
    }

    constructor() {
        super();
        this.classes = [];
        this.header = "TF2 class roster";
        this.updateRoster();
    }

    async updateRoster() {
        const address = new URL('../api/roster.js', import.meta.url).href;
        //const address = new URL('../assets/roster.json', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.classes = data;
        });

        await fetch(new URL('../assets/roster.json', import.meta.url).href).then(data => data   );
    }

    static get styles() { 
        return css`
        :host {
            display: inline-block;
        }
        .wrapper {
            border: 4px solid pink;
            display: flex;
        }
        .items {
            display: inline-flex;
        }
        `;
    }

    render() {
        return html`
            <h2>${this.header}</h2>
            <div class="wrapper">
                ${this.classes.map(classchar => html`
                <div class="items">
                    <videogame-card accentColor="${classchar.accentColor}" opened="${classchar.opened}" toptext="${classchar.toptext}" name="${classchar.name}" picture="${classchar.picture}" detailstext="${classchar.detailstext}" paragraph1="${classchar.paragraph1}" 
                <div>
                `)}
            </div>
        `;
    }
}

customElements.define("class-roster", ClassRoster);