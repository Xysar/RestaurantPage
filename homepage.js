function displayHome() {
  const container = document.getElementById("content");
  console.log(container);
  container.innerHTML = "";
  const homepage = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = "Julie's is now Open for Business!";
  const img = document.createElement("img");
  img.src = "./images/Julie's_logo_2020.png";

  homepage.appendChild(h3);
  homepage.appendChild(img);
  container.appendChild(homepage);
}

export default displayHome;
