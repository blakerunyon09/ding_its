import React from "react";
import Card from "./Card";

export default function FavoritesContainer({ favoriteRecipes }) {
  const showFavorites = () => favoriteRecipes.map(recipe => {
      return <Card key={recipe.name} recipe={recipe} fav={true} />
    });

  return (
    <section className="favorites">
      {showFavorites()}
    </section>
  )
}