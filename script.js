fetch('products.json')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('products');
  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.price} د.ع</p>
      </div>
    `;
  });
});