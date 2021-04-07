import logo from './logo.svg';
import './App.css';
import News from './Components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [articles,setArticles]= useState([]);
  useEffect(()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=819940a0ad13485c90a38a9c180ae1ad';
    fetch(url)
    .then(response=>response.json())
    .then(data=>setArticles(data.articles))
  },[])
  return (
    <div>
      {
        articles.map(article=> <News article={article}></News> )
      }
    </div>
  );
}

export default App;
