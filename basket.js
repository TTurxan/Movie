let tbody = document.querySelector("#tbody");
let btn = document.querySelector("#btn");
let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "movies.json", true);
ourRequest.onload = function () {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHtml(ourData);
};
ourRequest.send();
console.log(tbody);
function renderHtml(data) {
  var tr = "";
  for (let i = 0; i < data.length; i++) {
    tr += `
          <tr class="tr">
                                  <td class="imgbox">
                                      <img src="${data[i].image}" alt="">
                                      <span class="name">${data[i].name}</span>
                                  </td>
                                  <td class="imd"><span>${data[i].imd}</span></td>
                                  <td class="price">${data[i].price}</td>
                                  <td class="number">
                                  <div class="calculator">
                                  <span class="minus">-</span>
                                  <input type="text" value="1">
                                  <span class="plus">+</span>
                                  </div>
                                  <td class="total">${data[i].price}</td>
                                  </td>
          </tr>
      `;
  }
  tbody.insertAdjacentHTML("beforeend", tr);
}
let total = document.querySelector(".total");
let price = document.querySelector(".price");
let thead = document.querySelector("#thead");
console.log(tbody.parentElement.children[1].children);
let tr = tbody.parentElement.children[1].children;
console.log(tr);

tr.forEach("click", tr=> {
  tr.remove()
});
