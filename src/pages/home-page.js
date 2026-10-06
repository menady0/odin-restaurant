export default function home() {
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Bella Roma";
  const description = document.createElement("p");
  description.textContent =
    "Authentic Italian food made with fresh ingredients and a lot of love.";
  const message = document.createElement("p");
  message.textContent =
    "Come enjoy a warm and relaxing dining experience with us.";
  content.appendChild(heading);
  content.appendChild(description);
  content.appendChild(message);
};