import './App.scss';

import ArticleItem from './components/ArticleItem/ArticleItem';
import ArticleContainer from './components/ArticleContainer/ArticleContainer';
import LNHeader from './components/LNHeader/LNHeader';

function App() {
  return (
    <div className="App">
      <LNHeader></LNHeader>
      <ArticleContainer>
        <ArticleItem></ArticleItem>
      </ArticleContainer>
    </div>
  );
}

export default App;
