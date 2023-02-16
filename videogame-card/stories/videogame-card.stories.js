import { html } from 'lit';
import '../src/videogame-card.js';

export default {
  title: 'VideogameCard',
  component: 'videogame-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <videogame-card
      style="--videogame-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </videogame-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
