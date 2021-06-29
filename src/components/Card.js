import React from "react";

export default function Card({ recipe, addFavorite, fav }) {
  
  function handleClick() {
    addFavorite(recipe);
  }

  const addFavButton = () => (
    <button className='favorite' onClick={handleClick}>
    Add Recipe
    </button>
  )

  return (
    <article>
      <img src={recipe.image} alt={recipe.name} className='image' />
      <div>
        <h3 className='label'>{recipe.label}</h3>
        <button className='url'>
          <a href={recipe.url}>See Recipe</a>
        </button>
        {!fav ? addFavButton() : ''}
      </div>
    </article>
  );
}
