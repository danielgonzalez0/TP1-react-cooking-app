import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  //variables & states
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  //functions

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + keyword)
      .then((res) => {
        if (res.data.meals) {
          setData(res.data.meals);
        } else setData([]);
      });
  }, [keyword]);

  //jsx
  return (
    <div>
      <div className="header">
        <h1>React Cook</h1>
        <input
          type="text"
          id="searchBar"
          placeholder="Taper le nom d'un aliment (en anglais)"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="flex-container">
        {data.length > 0 ? (
          data.map((recipe) => (
            <Card
              key={recipe.idMeal}
              title={recipe.strMeal}
              origin={recipe.strArea}
              picture={recipe.strMealThumb}
              instructions={recipe.strInstructions}
            />
          ))
        ) : (
          <p>Aucune recette ne contient l'aliment recherché</p>
        )}
      </div>
    </div>
  );
};

export default App;
