import React from "react";
import Card from "./Card";

export default function Container(props) {
  const showRecipes = () =>
    props.recipes.map(recipe => {
      return <Card key={recipe.recipe.name} addFavorite={props.addFavorite} recipe={recipe.recipe} />;
    });

  return <section>{showRecipes()}</section>;
}