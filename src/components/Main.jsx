export default function Main() {
    const ingredients = ["Paneer", "Oregano", "Tomatoes"];

    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients)
    }

    return (
        <main className="main-container">
            <form onSubmit={handleSubmit} className="ingredient-form">
                <input 
                    type="text"
                    aria-label="Add ingredient" 
                    placeholder="e.g oregano" 
                    className="ingredient-input"
                    name="ingredient"
                />
                <button className="ingredient-button">+ Add ingredient</button>
            </form>
            <ul>{ingredientListItems}</ul>
        </main>
    );
}