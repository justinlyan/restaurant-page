export function loadHome() {
  const content = document.querySelector("#content");
  console.log(content);

  content.innerHTML = `
    <h1>Chef Wang</h1>
    <div class="card">
      <h2>HOURS</h2>
      <p>Monday-Friday: 10:45am - 3:00pm</p>
      <p>Saturday & Sunday: CLOSED</p>
    </div>
    <div class="card">
      <h2>LOCATION</h2>
      <p>1201 Main St #390, Dallas, TX 75202</p>
    </div>
  `
}