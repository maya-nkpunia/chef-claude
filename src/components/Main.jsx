import React from "react";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.target.reset();
    }

    return (
        <main className="main-container">
            <form onSubmit={addIngredient} className="ingredient-form">
                <input 
                    type="text"
                    aria-label="Add ingredient" 
                    placeholder="e.g oregano" 
                    className="ingredient-input"
                    name="ingredient"
                />
                <button className="ingredient-button">+ Add ingredient</button>
            </form>
            
            
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient-list" aria-live="polite">{ingredientListItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section> 
        </main>
    );
}