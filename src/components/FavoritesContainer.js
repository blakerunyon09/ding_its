import React from "react";
import Card from "./Card";

export default function FavoritesContainer({ favoriteRecipes, addFavorite }) {
  const showFavorites = () =>
    favoriteRecipes.map(recipe => {
      return (
        <Card
          key={recipe.recipe.name}
          recipe={recipe.recipe}
          addFavorite={addFavorite}
        />
      );
    });

  return <section>{showFavorites()}</section>;
}
