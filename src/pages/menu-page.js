export default function menu() {
  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  const pizza = document.createElement("h2");
  pizza.textContent = "Margherita Pizza";
  const pizzaDescription = document.createElement("p");
  pizzaDescription.textContent =
    "Tomato sauce, mozzarella, fresh basil, and olive oil.";
  const pasta = document.createElement("h2");
  pasta.textContent = "Pasta Carbonara";
  const pastaDescription = document.createElement("p");
  pastaDescription.textContent =
    "Creamy pasta with eggs, parmesan, and crispy pancetta.";
  const dessert = document.createElement("h2");
  dessert.textContent = "Tiramisu";
  const dessertDescription = document.createElement("p");
  dessertDescription.textContent =
    "Classic Italian dessert with coffee, mascarpone, and cocoa.";
  content.appendChild(heading);
  content.appendChild(pizza);
  content.appendChild(pizzaDescription);
  content.appendChild(pasta);
  content.appendChild(pastaDescription);
  content.appendChild(dessert);
  content.appendChild(dessertDescription);


}