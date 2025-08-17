$(document).ready(function () {
  const compareList = [];
  const maxCompare = 4;

  $("#cardsContainer").on("click", ".compareBtn", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);

    if (compareList.length >= maxCompare) {
      alert("حداکثر ۴ محصول می‌توانند مقایسه شوند!");
      return;
    }

    // ------------------------- Option One -----------------------------

        const cardDiv = $(this).closest(".card");
        const product = {
          name: cardDiv.find("h3").text(),
          price: cardDiv.find("p").text(),
          specs: cardDiv
            .find("ul li")
            .map((i, el) => $(el).text())
            .get(),
          rating: cardDiv.find(".rating").text(),
          img: cardDiv.find("img").attr("src"),
        };

        compareList.push(product);
        renderCompare();
      });

      function renderCompare() {
        $("#compareSection").empty();

        const allSpecs = compareList.map((p) => p.specs);
        const diffIndexes = [];
        if (allSpecs.length > 1) {
          for (let i = 0; i < allSpecs[0].length; i++) {
            const vals = allSpecs.map((spec) => spec[i]);
            if (!vals.every((v) => v === vals[0])) diffIndexes.push(i);
          }
        }

        compareList.forEach((product) => {
          const column = $(`
            <div class="card">
              <img src="${product.img}" alt="${product.name}">
              <h4>${product.name}</h4>
              <p>${product.price}</p>
              <div class="rating">${product.rating}</div>
              <ul>
                ${product.specs
                  .map(
                    (spec, i) =>
                      `<li style="${
                        diffIndexes.includes(i)
                          ? "background-color: red; color:white; border-radius: 6px; padding: 5px"
                          : ""
                      }">${spec}</li>`
                  )
                  .join("")}
              </ul>
            </div>
          `);
          $("#compareSection").append(column);
        });
      }
    });

    // ------------------------- Option Two -----------------------------

    // -------------- use Worker -------------

    // const worker = new Worker("scripts/compareWorker.js");

    // worker.onmessage = function (e) {
    //   renderCompare(e.data);
    // };

    // ---------------------------------------

//     const cardDiv = $(this).closest(".card");
//     const product = {
//       name: cardDiv.find("h3").text(),
//       price: cardDiv.find("p").text(),
//       specs: cardDiv
//         .find("ul li")
//         .map((i, el) => $(el).text())
//         .get(),
//       rating: cardDiv.find(".rating").text(),
//       img: cardDiv.find("img").attr("src"),
//     };

//     compareList.push(product);
//     renderCompare();

//     worker.postMessage(compareList);
//   });

//   function renderCompare() {
//     $("#compareSection").empty();

//     const allSpecs = compareList.map((p) => p.specs);
//     const diffIndexes = [];
//     if (allSpecs.length > 1) {
//       for (let i = 0; i < allSpecs[0].length; i++) {
//         const vals = allSpecs.map((spec) => spec[i]);
//         if (!vals.every((v) => v === vals[0])) diffIndexes.push(i);
//       }
//     }

//     compareList.forEach((product) => {
//       const column = $(`
//         <div class="card">
//           <img src="${product.img}" alt="${product.name}">
//           <h4>${product.name}</h4>
//           <p>${product.price}</p>
//           <div class="rating">${product.rating}</div>
//           <ul>
//             ${product.specs
//               .map(
//                 (spec, i) =>
//                   `<li style="${
//                     diffIndexes.includes(i)
//                       ? "background-color: red; color:white; border-radius: 6px; padding: 5px"
//                       : ""
//                   }">${spec}</li>`
//               )
//               .join("")}
//           </ul>
//         </div>
//       `);
//       $("#compareSection").append(column);
//     });
//   }
// });
