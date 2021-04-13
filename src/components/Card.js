import React from "react";

export default function Card({ recipe }) {
  return (
    <article>
      <img src={recipe.image} alt={recipe.name} className='image' />
      <p className='label'>{recipe.label}</p>
      <p className='cuisine-type'>{recipe.cuisineType}</p>
      <button className='url'>
        <a href={recipe.url}>See Recipe</a>
      </button>
    </article>
  );
}
