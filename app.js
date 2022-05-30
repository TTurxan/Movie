// class Products {
//      async getProducts() {
//           try {
//                let result = await fetch("movies.json");
//                let data = await result.json();
//                let products = data;
//                return products;
//           } catch (error) {
//                console.log(error);
//           }
//      }
// }
// let list = document.getElementById("list");
// let tbody = document.getElementById("tbody")
// let cartTotal = document.querySelector(".total")
// let cartItems = document.querySelector(".sayi")
// let cartContent = document.querySelector("#tbody")
// let basket = document.querySelector(".basket2")
// let clearBtn = document.querySelector(".clear")
// let buttonsDom = []
// let cart = []
// class UI {
//      displayProducts(products) {
//           console.log(products);
//           var htmlString = "";
//           products.forEach(element => {
//                console.log(element);
//                htmlString += `
//                          <div class="col-md-3 mb-5 movie">
//                          <div class="imgbox">
//                                   <img src="${element.image}" alt="">
//                               </div>
//                               <div class="words"><h5 class="name"> ${element.name}</h5> <p class="imd">Imd: ${element.imd}</p></div>
//                               <div class="price">Price:<div class="money">${element.price}</div></div>
//                               <div class="icons">
//                               <i class="fa-solid fa-basket-shopping btn-add" data-id=${element.id}></i>
//                               <i class="fa-solid fa-heart"></i>
//                               <i class="fa-solid fa-eye"></i>
//                               </div>
//                           </div>
//                           `
//           })
//           list.innerHTML = htmlString
//      }

//      getBagButtons() {
//           let buttons = [...document.querySelectorAll(".btn-add")]
//           buttonsDom = buttons
//           console.log(buttonsDom);
//           buttons.forEach(button => {
//                let id = button.dataset.id
//                let inCart = cart.find(item => item.id === id)
//                if (inCart) {
//                     button.setAttribute("disabled", "disabled")
//                     button.opacity = ".3"
//                }
//                else {
//                     button.addEventListener("click", event => {
//                          event.target.disabled = "true"
//                          event.target.style.opacity = ".3"
//                          console.log(event.target);
//                          let cartItem = { ...Storage.getProduct(id), amount: 1 }
//                          console.log(cartItem);
//                          cart = [...cart, cartItem]
//                          console.log(cart);
//                          Storage.saveCart(cart)

//                          this.saveCartValues(cart)

//                          this.addCartItem(cartItem)

//                          this.showCart()
//                     })
//                }
//           })
//      }
//      saveCartValues(cart) {
//           let tempTotal = 0;
//           let itemsTotal = 0;
//           cart.map(item => {
//                tempTotal += item.price * item.amount;
//                itemsTotal += item.amount;
//           });
//           cartTotal.innerText = Number(parseFloat(tempTotal.toFixed(2)));
//           cartItems.innerText = itemsTotal;
//      }
//      addCartItem(cartItem) {
//           console.log(cartItem);
//           const li = document.createElement("li")
//           li.innerHTML = `  <tr class="tr">
//                                       <div class="imgbox">
//                                         <img  src="${cartItem.image}" alt="">
//                                         <span class="name">${cartItem.name}<span class="price">$${cartItem.price}</span></span>
//                                         </div>
//                                   <div class="calculator">
//                                   <button class="minus" data-id=${cartItem.id}>-</button>
//                                   <input type="text" value="${cartItem.amount}" data-id=${cartItem.id} class="input"/> 
//                                   <button class="plus" data-id=${cartItem.id}>+</button>
//                                   </div>
//                                   </td>
//                                   <div><i class="fas fa-trash  trash" data-id=${cartItem.id}></i></div>
//           </tr>
//       `;
//           tbody.appendChild(li)
//      }

//      showCart() {
//           basket.click()
//      }
//      setupaAPP() {
//           cart = Storage.getCart()
//           this.saveCartValues(cart)
//           this.populateCart(cart)
//      }

//      populateCart(cart) {
//           cart.forEach(item => this.addCartItem(item))
//      }

//      cartLogic() {
//           clearBtn.addEventListener("click", () => {
//                this.clearCart()
//           })
//           cartContent.addEventListener("click", (event) => {
//                if (event.target.classList.contains("trash")) {
//                     let removeItem = event.target
//                     console.log(removeItem);
//                     let id = removeItem.dataset.id
//                     console.log(id);
//                     removeItem.parentElement.parentElement.remove()
//                     this.removeItem(id)
//                } else if (event.target.classList.contains("minus")) {
//                     let lowerAmount = event.target
//                     let id = lowerAmount.dataset.id
//                     let tempItem = cart.find(item => item.id === id);
//                     tempItem.amount = tempItem.amount - 1;
//                     console.log(tempItem);
//                     if (tempItem.amount > 0) {
//                          Storage.saveCart(cart);
//                          this.saveCartValues(cart);
//                          lowerAmount.nextElementSibling.value = tempItem.amount;
//                     } else {
//                          lowerAmount.parentElement.parentElement.remove();
//                          this.removeItem(id);
//                     }
//                } else if (event.target.classList.contains("plus")) {
//                     let addAmount = event.target;
//                     let id = addAmount.dataset.id;
//                     let tempItem = cart.find(item => item.id === id);
//                     tempItem.amount = tempItem.amount + 1;
//                     Storage.saveCart(cart);
//                     this.saveCartValues(cart);
//                     addAmount.previousElementSibling.value = tempItem.amount;
//                     console.log(addAmount.previousElementSibling.value);
//                }
//           })
//      }

//      clearCart() {
//           let cartItems = cart.map(item => item.id)
//           cartItems.forEach(id => this.removeItem(id))
//           while (cartContent.children.length > 0) {
//                cartContent.removeChild(cartContent.children[0])
//                console.log(cartContent);
//           }
//      }

//      removeItem(id) {
//           cart = cart.filter(item => item.id !== id)
//           this.saveCartValues(cart)
//           Storage.saveCart(cart)
//           let button = this.getSingleButton(id)
//           button.disabled = true
//           button.style.opacity = "1"
//      }
//      getSingleButton(id) {
//           return buttonsDom.find(button => button.dataset.id === id)
//      }
// }

// class Storage {
//      static saveProducts(products) {
//           localStorage.setItem("products", JSON.stringify(products));
//      }

//      static getProduct(id) {
//           let products = JSON.parse(localStorage.getItem("products"));
//           return products.find(product => product.id === id);
//      }

//      static saveCart(cart) {
//           localStorage.setItem("cart", JSON.stringify(cart));
//      }

//      static getCart(cart) {
//           return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
//      }

// }
// document.addEventListener("DOMContentLoaded", () => {
//      const ui = new UI();
//      const products = new Products();

//      ui.setupaAPP()
//      products.getProducts().then(products => {
//           ui.displayProducts(products);
//           Storage.saveProducts(products);
//      }).then(() => {
//           ui.getBagButtons();
//           ui.cartLogic()
//      })
//      let listMovie = document.querySelector(".movielist")
//      let basket = document.querySelector(".basket2")
//      basket.addEventListener("click", function () {
//           listMovie.style.display = "block"
//      })
// });

$(document).ready(function () {
     $('#search').keyup(function () {
          search($(this).val());
     });
     function search(value) {
          $('#list .movie').each(function () {
               var found = 'false';
               $(this).each(function () {
                    if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                         found = 'true';
                    }
               });
               if (found == 'true') {
                    $(this).show();
               }
               else {
                    $(this).hide();
               }
          });
     }
});


let list = document.getElementById("list");
let tbody = document.getElementById("tbody")
let cartTotal = document.querySelector(".total")
let sebetSayi = document.querySelector(".sayi")
let cartContent = document.querySelector("#tbody")
let basket = document.querySelector(".basket2")
let clearBtn = document.querySelector(".clear")
let btnAdd = document.querySelectorAll(".btn-add")
let movieList = document.querySelector(".movielist")
let buttonsDom = []
let sebetdekiler = []


// localStorage.setItem("myMovies", JSON.stringify(movies))


function loadLocal() {
     movies = JSON.parse(localStorage.getItem("myMovies"));
     writeEkran()
     let loadMovies = movies.filter(movie => movie.cart === true)
     tbody.innerHTML = ""
     loadMovies.forEach(writeBasket)
}
loadLocal()
function firstTimeSaveLocal() {
     let localGetMovies = JSON.parse(localStorage.getItem("myMovies"));


     if (localGetMovies === null) {
          localStorage.setItem("myMovies", JSON.stringify(movies));
     }

}

function saveLocal() {
     localStorage.setItem("myMovies", JSON.stringify(movies));
}
firstTimeSaveLocal()


function writeEkran() {
     var htmlString = "";
     movies = JSON.parse(localStorage.getItem("myMovies"))
     movies.forEach(element => {
          htmlString += `
                         <div class="col-md-3 mb-5 movie">
                         <div class="imgbox">
                                  <img src="${element.image}" alt="">
                              </div>
                              <div class="words"><h5 class="name"> ${element.name}</h5> <p class="imd">Imd: ${element.imd}</p></div>
                              <div class="price">Price:<div class="money">${element.price}</div></div>
                              <div class="icons">
                              <i class="fa-solid fa-basket-shopping btn-add" data-id=${element.id}></i>
                              <i class="fa-solid fa-heart"></i>
                              <i class="fa-solid fa-eye"></i>
                              </div>
                          </div>
                          `
     })
     list.innerHTML = htmlString
}
writeEkran()

basket.addEventListener("click", function () {
     movieList.classList.toggle("active")
})

function writeBasket(movies) {
     const li = document.createElement("li")
     li.innerHTML = `  <tr class="tr" >
                                      <div class="imgbox">
                                        <img  src="${movies.image}" alt="">
                                        <span class="name">${movies.name}<span class="price">$${movies.price}</span></span>
                                        </div>
                                  <div class="calculator">
                                  <button class="minus" data-id=${movies.id}>-</button>
                                  <input type="text" value="${movies.sebetSayi}" data-id=${movies.id} class="input"/> 
                                  <button class="plus" data-id=${movies.id}>+</button>
                                  </div>
                                  </td>
                                  <div><i class="fas fa-trash  trash" data-id=${movies.id}></i></div>
          </tr>
      `;
     tbody.appendChild(li)
}
// writeBasket()


list.addEventListener("click", function (e) {
     if (e.target.classList.contains("btn-add")) {
          // let loadMovies = JSON.parse(localStorage.getItem("myMovies"));
          let id = e.target.dataset.id
          // console.log(id);
          movies[id].sebetSayi++
          // console.log(sebetSayi.innerHTML);
          saveLocal()
          loadMovies = movies.filter(movie => movie.sebetSayi > 0)
          tbody.innerHTML = ""
          loadMovies.forEach(writeBasket)
          saveMovieValues(movies)
          // console.log(loadMovies);
     }
})

function updateBasket() {
     loadMovies = movies.filter(movie => movie.sebetSayi > 0)
     tbody.innerHTML = ""
     loadMovies.forEach(writeBasket)
     saveMovieValues(movies)
}
function saveMovieValues(movies) {
     let tempTotal = 0;
     let itemsTotal = 0;
     // movies.map(item => {
     //      console.log(item);
     //      tempTotal += item.price * item.sebetSayi;
     //      console.log(tempTotal);
     //      itemsTotal += item.sebetSayi;                //menim koduma uygun hesablama aparirrdiq sebetde 
     // });
     // cartTotal.innerText = Number(parseFloat(tempTotal.toFixed(2)));
     // sebetSayi.innerText = itemsTotal;
     for (let i = 0; i < movies.length; i++) {
          tempTotal += movies[i].price * movies[i].sebetSayi
          itemsTotal += movies[i].sebetSayi
     }
     cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
     sebetSayi.innerText = itemsTotal
}
saveMovieValues(movies)
// function updateBasket() {
//      movieTotal = 0;
//      cartTotal = 0;
//      for (let i = 0; i < movies.length; i++) {
//           movieTotal += movies[i].price * movies[i].sebetSayi;
//           cartTotal += movies[i].sebetSayi                                   //cavadin koduna uygun hesablama aparirdiq sebetde
//      }
//      saveLocal();
//      cartTotal.innerText = Number(parseFloat(movieTotal.toFixed(2)));
//      sebetSayi.innerText = cartTotal;
// }
tbody.addEventListener("click", function (e) {
     if (e.target.classList.contains("trash")) {
          let id = e.target.dataset.id
          console.log(id);
          movies[id].sebetSayi = 0
          saveLocal()
          updateBasket()
     }
     else if (e.target.classList.contains("plus")) {
          let id = e.target.dataset.id
          movies[id].sebetSayi++
          saveLocal()
          updateBasket()
     }
     else if (e.target.classList.contains("minus")) {
          let id = e.target.dataset.id
          if (movies[id].sebetSayi > 1) {
               movies[id].sebetSayi--
               saveLocal()
               updateBasket()
          } else if (movies[id].sebetSayi === 1) {
               movies[id].sebetSayi--
               saveLocal()
               tbody.innerHTML = ""
               loadMovies = movies.filter(movie => movie.sebetSayi > 0)
               loadMovies.forEach(writeBasket)
               updateBasket()
          }
     }
})

clearBtn.addEventListener("click", () => {
     for (let i = 0; i < movies.length; i++) {
          movies[i].sebetSayi = 0
     }
     saveLocal()
     updateBasket()
})