import Card from './cards/card.js';
import Card2 from './cards/card2.js';
import Head from './header.js';
function App() {
  return (
    <div className="App">
      <Head/>
      <a href="https://en.wikipedia.org/wiki/Bugle"><Card/></a>
      <a href="https://github.com/creativeDrawerStudios/eSharpBeta"><Card2/></a>
    </div>
  );
}

export default App;
