import './App.scss';

import ArticleItem from './components/ArticleItem/ArticleItem';
import ArticleContainer from './components/ArticleContainer/ArticleContainer';

import articleImage768 from './assets/img/image-768.jpg';
import articleImage320 from './assets/img/image-320.jpg';

const imageObj = {
  w768: articleImage768,
  w320: articleImage320
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <ArticleContainer>
            <div className="grid left-highlight">
              <ArticleItem highlight img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                body="Subhead. Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
                marquee="Marquee / Author"
              ></ArticleItem>
              <ArticleItem type="author"
                lead="Lead"
                title="Esto es un título"
                avatar=""
                author="Author full name"
              ></ArticleItem>
              <ArticleItem img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                marquee="Marquee / Author"
              ></ArticleItem>
            </div>
          </ArticleContainer>
          <ArticleContainer>
            <div className="grid half">
              <ArticleItem half img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                marquee="Marquee / Author"
              ></ArticleItem>
              <ArticleItem half img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                marquee="Marquee / Author"
              ></ArticleItem>
            </div>
          </ArticleContainer>
          <ArticleContainer title="Interés general" url="#">
            <div className="grid three-rows">
              <ArticleItem img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                marquee="Marquee / Author"
              ></ArticleItem>
              <ArticleItem lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                body="Subhead. Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
                marquee="Marquee / Author"
              ></ArticleItem>
              <ArticleItem type="author"
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                avatar=""
                author="Author full name"
              ></ArticleItem>
              <ArticleItem img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
              ></ArticleItem>
              <ArticleItem img={imageObj}
                lead="Lead"
                title="Esto es un título"
              ></ArticleItem>
              <ArticleItem img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                marquee="Marquee / Author"
              ></ArticleItem>
            </div>
          </ArticleContainer>
        </main>
        <aside>
          
        </aside>
        <ArticleContainer title="Las más leídas">
            <ol class="grid most-read">
              <li>
              <ArticleItem img={imageObj}
                lead="Lead"
                title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
              ></ArticleItem>
              </li>
              <li>
                <ArticleItem img={imageObj}
                  lead="Lead"
                  title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                ></ArticleItem>
              </li>
              <li>
                <ArticleItem img={imageObj}
                  lead="Lead"
                  title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                ></ArticleItem>
              </li>
              <li>
                <ArticleItem img={imageObj}
                  lead="Lead"
                  title="Esto es un título de la novedad con unas cuantas líneas que ocupar"
                ></ArticleItem>
              </li>
            </ol>
          </ArticleContainer>
      </div>
    </div>
  );
}

export default App;
