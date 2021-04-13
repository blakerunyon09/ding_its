import React from 'react'
import Card from './Card'


export default function Container(props) {

    const showRecipes = () => props.recipes.map(recipe => {
        return <Card recipe={recipe.recipe} />
    })

    return (
        <section>
            {showRecipes()}
        </section>
    )
}
