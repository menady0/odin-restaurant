export default function about() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  const description = document.createElement("p");
  description.textContent =
    "Bella Roma is a family-owned restaurant inspired by the traditional flavors of Italy.";
  const location = document.createElement("p");
  location.textContent = "123 Main Street, Cairo";
  const hours = document.createElement("p");
  hours.textContent = "Open every day from 11:00 AM to 11:00 PM.";
  content.appendChild(heading);
  content.appendChild(description);
  content.appendChild(location);
  content.appendChild(hours);
};
