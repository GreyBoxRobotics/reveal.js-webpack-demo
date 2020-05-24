import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';

let deck = new Reveal({
   plugins: [ Markdown, Highlight, Zoom, Notes, Math, Search ]
})
deck.initialize();
