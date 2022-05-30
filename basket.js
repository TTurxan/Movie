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
console.log(tbody.children[0]);
function renderHtml(data) {
  var htmlsTRING = "";
  for (let i = 0; i < data.length; i++) {
    htmlsTRING += `
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
  tbody.insertAdjacentHTML("beforeend", htmlsTRING);
}
let tr = document.querySelectorAll(".tr")






















// function renderHtml(data) {
//      console.log(data);
//      var htmlString = "";
//           for (let i = 0; i < data.length; i++) {
//                htmlString += `
//          <div class="col-md-3 mb-5 movie">
//          <div class="imgbox">
//              <img src="${data[i].image}" alt="">
//          </div>
//          <div class="words"><h5 class="name"> ${data[i].name}</h5> <p class="imd">Imd: ${data[i].imd}</p></div>
//          <div class="price">Price:<div class="money">${data[i].price}</div></div>
//          <div class="icons">
//            <i class="fa-solid fa-basket-shopping smallBasket"></i>
//            <i class="fa-solid fa-heart"></i>
//            <i class="fa-solid fa-eye"></i>
//          </div>
//      </div>
//      `;
//           }
//      // data.forEach(element => {
//      //      htmlString += `
//      //                <div class="col-md-3 mb-5 movie">
//      //                <div class="imgbox">
//      //                    <img src="${element.image}" alt="">
//      //                </div>
//      //                <div class="words"><h5 class="name"> ${element.name}</h5> <p class="imd">Imd: ${element.imd}</p></div>
//      //                <div class="price">Price:<div class="money">${element.price}</div></div>
//      //                <div class="icons">
//      //                  <i class="fa-solid fa-basket-shopping smallBasket"></i>
//      //                  <i class="fa-solid fa-heart"></i>
//      //                  <i class="fa-solid fa-eye"></i>
//      //                </div>
//      //            </div>
//      //            `
//      // })
//      list.insertAdjacentHTML("beforeend", htmlString);
//      // list.innerHTML = htmlString
//      let basket = document.querySelector(".basket2")
//      var movieList = document.querySelectorAll(".movie");
//      let smallBasket = document.querySelectorAll(".smallBasket");
//      let sayi = document.querySelector(".sayi")
//      let listMovie = document.querySelector(".movielist")
//      smallBasket.forEach((item) => {
//           item.addEventListener("click", function (e) {
//                sayi.innerHTML++
//                let sekil = item.parentElement.parentElement.children[0].children[0].getAttribute("src")
//                let name = item.parentElement.parentElement.children[1].children[0].textContent
//                let price = item.parentElement.parentElement.children[2].children[0].textContent
//                var htmlsTRING = "";
//                htmlsTRING += `
//                             <tr class="tr">
//                                                     <td class="imgbox">
//                                                         <img src="${sekil}" alt="">
//                                                         </td>
//                                                         <td><span class="name">${name}</span></td>
//                                                     <td class="price">${price}</td>
//                                                     <td>    <div class="icons">
//                                                     <i class="fas fa-trash trash"></i>
//                                                   </div></td>
//                                                     </td>
//                             </tr>
//                         `;
//                tbody.insertAdjacentHTML("afterbegin", htmlsTRING);
//                let tr = document.querySelectorAll(".tr")
//                let trash = document.querySelectorAll(".trash")
//                console.log(tr);
//                console.log(trash);
//                trash.forEach((item) => {
//                     item.addEventListener("click", () => {
//                          alert("dqwqw")
//                          console.log(item);
//                     })
//                })
//           });
//      })
//      basket.addEventListener("click", function () {
//           listMovie.style.display = "block"
//      })
// }