import React from "react";

export default function Card({ recipe }) {
  return (
    <article>
      <img src={recipe.image} alt={recipe.name} className='image' />
      <div>
        <h3 className='label'>{recipe.label} - {recipe.cuisineType}</h3>
        <button className='url'>
          <a href={recipe.url}>See Recipe</a>
        </button>
      </div>
    </article>
  );
}
