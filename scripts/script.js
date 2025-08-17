$(document).ready(function () {
  const bigList = Array.from({ length: 500 }, (_, i) => {
    const product = products[i % products.length];
    return { ...product, name: `${i + 1} محصول` };
  });

  const fragment = $(document.createDocumentFragment());

  bigList.forEach((product) => {
    const card = $(`
      <div class="card">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>قیمت: ${product.price.toLocaleString()} تومان</p>
        <ul>
          ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
        </ul>
        <div class="rating">${product.rating} ★</div>
        <button class="compareBtn">اضافه به مقایسه</button>
      </div>
    `);
    fragment.append(card);
  });

  $("#cardsContainer").append(fragment);
});


