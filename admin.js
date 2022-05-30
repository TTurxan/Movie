// let tbody = document.getElementById("tbody");
// let plus2 = document.querySelector(".plus2");
// let name = document.querySelector("#name");
// let imd = document.querySelector("#imd");
// let ourRequest = new XMLHttpRequest();
// ourRequest.open("GET", "movies.json", true);
// ourRequest.onload = function () {
//   var ourData = JSON.parse(ourRequest.responseText);
//   renderHtml(ourData);
//   // localStorage.setItem("adlar", JSON.stringify(ourData));
//   let local = JSON.parse(localStorage.getItem("myobj"));
//   console.log(local);
// };
// ourRequest.send();
// function renderHtml(data) {
//   var htmlString = "";
//   //  if(localStorage.getItem("myobj")){
//   //   var datas =  JSON.parse(localStorage.getItem("myobj"));
//   //   console.log(datas);
//   //  }
//   if (JSON.parse(localStorage.getItem("myobj"))) {
//     var local = localStorage.getItem("myobj");
//     var localjs = JSON.parse(local);
//     console.log("localJs: ", localjs);
//     localjs.map((item) => {
//       console.log("item: ", item.name);
//       var htmlString = "";
//       htmlString += `<tr class="list">
//     <td class="photo"></td>
//     <td>${item?.name}</td>
//     <td> ${item?.imd}</td>
//     <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
//     </tr>
//     `;
//       tbody.insertAdjacentHTML("beforeend", htmlString);
//     });
//   }

//   for (let i = 0; i < data.length; i++) {
//     htmlString += `<tr class="list">
//     <td class="photo"> <img src="${data[i].image}" alt=""></td>
//     <td>${data[i].name}</td>
//     <td> ${data[i].imd}</td>
//     <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
//     </tr>
//     `;
//   }
//   tbody.insertAdjacentHTML("beforeend", htmlString);
//   var anotherList = document.querySelectorAll(".list");
//   for (let i = 0; i < anotherList.length; i++) {
//     let trashList = document.querySelectorAll(".trash");
//     trashList.forEach((item, index) => {
//       item.addEventListener("click", function (e) {
//         this.parentElement.parentElement.remove();
//       });
//     });
//   }

//   for (let i = 0; i < anotherList.length; i++) {
//     let editList = document.querySelectorAll(".edit");
//     editList.forEach((item, index) => {
//       item.addEventListener("click", function (e) {
//         this.parentElement.parentElement.remove();
//         name.value = this.parentElement.parentElement.children[1].textContent;
//         imd.value = this.parentElement.parentElement.children[2].textContent;
//         console.log("valideyn", this.parentElement.parentElement.children);
//       });
//     });
//   }

//   console.log("anotherLsit", anotherList);
// }

// plus2.addEventListener("click", function () {
//   var movies = [];
//   if (
//     name.value == null ||
//     imd.value == null ||
//     name.value == "" ||
//     imd.value == ""
//   ) {
//     alert("Xanani doldurun.");
//   } else {
//     let movie = {};
//     console.log("initiailmoviem", movie);
//     movie.name = name.value;
//     movie.imd = imd.value;
//     if (JSON.parse(localStorage.getItem("myobj") === null)) {
//       movies.push(movie);
//       localStorage.setItem("myobj", JSON.stringify(movies));
//     } else {
//       var data = JSON.parse(localStorage.getItem("myobj"));
//       data.push(movie);
//       localStorage.setItem("myobj", JSON.stringify(data));
//       console.log("myData", data);
//       console.log("dataname", movie.name);
//     }

//     var local = localStorage.getItem("myobj");
//     var localjs = JSON.parse(local);
//     console.log("localJs: ", localjs);
//     localjs.map((item) => {
//       console.log("item: ", item.name);
//       var htmlString = "";
//       htmlString += `<tr class="list">
//     <td class="photo"></td>
//     <td>${item?.name}</td>
//     <td> ${item?.imd}</td>
//     <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
//     </tr>
//     `;
//     tbody.insertAdjacentHTML("beforeend", htmlString);
//     });
//     console.log(movie.name);
//     name.value = "";
//     imd.value = "";
//     // var anotherList = document.querySelectorAll(".list");
//     // localStorage.setItem("moviesss", JSON.stringify(htmlString));
//     // var local = localStorage.getItem("moviesss");
//     // var localjs = JSON.parse(local)
//     // console.log(htmlString);
//     // console.log(localjs);
//   }
//   var anotherList = document.querySelectorAll(".list");
//   for (let i = 0; i < anotherList.length; i++) {
//     let uniqueTrash = document.querySelectorAll(".trash");
//     uniqueTrash.forEach((trash, index) => {
//       trash.addEventListener("click", function (e) {
//         this.parentElement.parentElement.remove();
//       });
//     });
//   }

//   for (let i = 0; i < anotherList.length; i++) {
//     let uniqueList = document.querySelectorAll(".edit");
//     uniqueList.forEach((edit, index) => {
//       edit.addEventListener("click", function (e) {
//         this.parentElement.parentElement.remove();
//         name.value = this.parentElement.parentElement.children[1].textContent;
//         imd.value = this.parentElement.parentElement.children[2].textContent;
//       });
//     });
//   }
// });
// console.log(document.querySelectorAll(".list"));







// let tbody = document.getElementById("tbody");
// let addBtn = document.querySelector(".plus2");
// let name = document.querySelector("#name");
// let imd = document.querySelector("#imd");
// let cart = {}
// let buttonsDom = []

// class Products {
//   async getProducts() {
//     try {
//       let result = await fetch("movies.json");
//       let data = await result.json();
//       let products = data;
//       cart.push(data)
//       console.log(cart);
//       console.log(products);
//       return products;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
// class UI {
//   displayProducts(products) {
//     console.log(products);
//     var htmlString = "";
//     products.forEach(element => {
//       htmlString += `<tr class="list">
//                           <td class="photo">
//                           <img src="${element.image}" alt="">
//                           </td>
//                           <td>${element.name}</td>
//                           <td> ${element.imd}</td>
//                           <td><i class="fas fa-edit edit" data-id=${element.id}></i><i class="fas fa-trash trash" data-id=${element.id}></i></td>
//                           </tr>

//                     `
//     })
//     tbody.innerHTML = htmlString
//   }
//   getBagButtons() {
//     addBtn.addEventListener("click", (e) => {
//       e.preventDefault()
//       var movies = [];
//       if (
//         name.value == null ||
//         imd.value == null ||
//         name.value == "" ||
//         imd.value == ""
//       ) {
//         alert("Xanani doldurun.");
//       } else {
//         let movie = {};
//         movie.name = name.value;
//         movie.imd = imd.value;
//         console.log(movie);
//         if (JSON.parse(localStorage.getItem("myobj") === null)) {
//           movies.push(movie);
//           localStorage.setItem("myobj", JSON.stringify(movies));
//         } else {
//           var data = JSON.parse(localStorage.getItem("myobj"));
//           data.push(movie);
//           localStorage.setItem("myobj", JSON.stringify(data));
//           console.log(data);
//         }
//       }
// })
// name.value = "";
// imd.value = "";
//   }

//   setupaAPP() {
//     cart = Storage.getCart()
//     console.log(cart);
//     // this.populateCart(cart)
//   }
//   // populateCart(cart) {
//   //   cart.forEach(item => this.addCartItem(item))
//   // }
//   Delete() {
//     let deletesButton = [...document.querySelectorAll(".trash")]
//     buttonsDom = deletesButton
//     console.log(deletesButton);
//     console.log(buttonsDom);
//     deletesButton.forEach(button => {
//       let id = button.dataset.id
//       let inCart = cart.find(item => item.id === id)
//       console.log(id);
//       console.log(inCart);
//       button.addEventListener("click", () => {
//         let cartItem = { ...Storage.getProduct(id), amount: 1 }
//         console.log(cartItem);
//         localStorage.removeItem(cartItem)
//         cart = [...cart, cartItem]
//         Storage.saveCart(cart)
//         console.log(cart);
//       })
//     })
//   }
//   // Create() {
//   //   var local = localStorage.getItem("myobj");
//   //   var localjs = JSON.parse(local);
//   //   console.log("localJs: ", localjs);
//   //   localjs.forEach((item) => {
//   //     var htmlString = "";
//   //     console.log("item: ", item.name);
//   //     htmlString += `<tr class="list">
//   //       <td class="photo"></td>
//   //       <td>${item.name}</td>
//   //       <td> ${item.imd}</td>
//   //       <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
//   //       </tr>
//   //       `;
//   //     tbody.insertAdjacentHTML("beforeend", htmlString);
//   //   });
//   // }

//   // Delete() {
//   //   let trash = document.querySelectorAll(".trash")
//   //   trash.forEach((item) => {
//   //     item.addEventListener("click", function () {
//   //       let localjs = JSON.parse(localStorage.getItem("myobj"));
//   //       localStorage.setItem("myobj", JSON.stringify(localjs));
//   //       this.parentElement.parentElement.remove()
//   //       Create()
//   //     })
//   //   })
//   // }

//   cartLogic() {
//     tbody.addEventListener("click", (event) => {
//       if (event.target.classList.contains("trash")) {
//         let removeItem = event.target
//         console.log(removeItem);
//         let id = removeItem.dataset.id
//         console.log(id);
//         removeItem.parentElement.parentElement.remove()
//         this.removeItem(id)
//         localStorage.removeItem(cartItems)
//       }
//     })
//   }

//   removeItem(id) {
//     cart = cart.filter(item => item.id !== id)
//     Storage.saveCart(cart)
//     console.log(cart);
//   }
// }

// class Storage {
//   static saveProducts(products) {
//     localStorage.setItem("products", JSON.stringify(products));
//   }
//   static getProduct(id) {
//     let products = JSON.parse(localStorage.getItem("products"));
//     return products.find(product => product.id === id);
//   }
//   static saveCart(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }
//   static getCart(cart) {
//     return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
//   }
// }

// document.addEventListener("DOMContentLoaded", (e) => {
//   const ui = new UI();
//   const products = new Products();

//   ui.setupaAPP()
//   products.getProducts().then(products => {
//     ui.displayProducts(products);
//     Storage.saveProducts(products);
//   }).then(() => {
//     ui.getBagButtons();
//     ui.cartLogic()
//     ui.Delete()
//     // ui.Create()
//     // ui.Delete()
//   })
// })













// let movielist = ["turxan", "tomayev"]
// let getMovieList
// let tbody = document.getElementById("tbody");
// let addBtn = document.querySelector(".plus2");
// let name = document.querySelector("#name");
// let imd = document.querySelector("#imd");



//     localStorage.setItem("movielist", JSON.stringify(movielist))

//     function Read() {
//       tbody.innerHTML = ""
//       getMovieList = JSON.parse(localStorage.getItem("movielist"))
//       if (getMovieList != null) {
//          if (getMovieList.lenght ===0) {
//             tbody.innerHTML = "film yoxudr"
//          }
//          else{
//            for (let i = 0; i < getMovieList.length; i++) {
//               tbody.innerHTML += `
//               <tr class="list">
//                             <td class="photo">
//                             <img src="${getMovieList[i]}" alt="">
//                             </td>
//                             <td class="name">${getMovieList[i]}</td>
//                             <td class="imd"> ${getMovieList[i]}</td>
//                             <td><i class="fas fa-edit edit" onclick="Edit()"></i><i class="fas fa-trash trash" onclick="Delete()"></i></td>
//                             </tr>

//               `
//            }
//          }
//       }
//     }

//     Read()














// class Products {
//   async getProducts() {
//     try {
//       let result = await fetch("movies.json");
//       let data = await result.json();
//       let products = data;
//       cart.push(data)
//       return products;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
// let list = document.getElementById("list");
// let cartContent = document.querySelector("#tbody")
// let buttonsDom = []
// let cart = []
// class UI {
//   displayProducts(products) {
//     console.log(products);
//     var htmlString = "";
//     products.forEach(element => {
//       console.log(element);
//       htmlString += `<tr class="list">
//                                        <td class="photo">
//                                        <img src="${element.image}" alt="">
//                                        <td>${element.name}</td>
//                                        <td> ${element.imd}</td>
//                                        <td><i class="fas fa-edit edit" data-id=${element.id}></i><i class="fas fa-trash trash" data-id=${element.id}></i></td>
//                                        </tr>

//                                  `
//     })
//     tbody.innerHTML = htmlString
//   }

//   getBagButtons() {
//     let button = document.querySelector(".plus2")
//     button.addEventListener("click", event => {
//       let id = button.dataset.id
//       console.log(id);
//       let cartItem = { ...Storage.getProduct(id), amount: 1 }
//       console.log(cartItem);
//       cart = [...cart, cartItem]
//       console.log(cart);
//       Storage.saveCart(cart)

//       this.addCartItem(cartItem)

//     })
//   }

//   addCartItem(cartItem) {
//     console.log(cartItem);
//     const li = document.createElement("li")
//     li.innerHTML = `<tr class="list">
//            <td class="photo"></td>
//            <td>${cartItem?.name}</td>
//            <td> ${cartItem?.imd}</td>
//            <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
//            </tr>
//            `;
//     tbody.appendChild(li)
//   }

//   setupaAPP() {
//     cart = Storage.getCart()
//     this.populateCart(cart)
//   }

//   populateCart(cart) {
//     cart.forEach(item => this.addCartItem(item))
//   }

//   cartLogic() {
//     cartContent.addEventListener("click", (event) => {
//       if (event.target.classList.contains("trash")) {
//         let removeItem = event.target
//         console.log(removeItem);
//         let id = removeItem.dataset.id
//         console.log(id);
//         removeItem.parentElement.parentElement.remove()
//         this.removeItem(id)
//       }
//     })
//   }

//   clearCart() {
//     let cartItems = cart.map(item => item.id)
//     cartItems.forEach(id => this.removeItem(id))
//     while (cartContent.children.length > 0) {
//       cartContent.removeChild(cartContent.children[0])
//       console.log(cartContent);
//     }
//   }

//   removeItem(id) {
//     cart = cart.filter(item => item.id !== id)
//     Storage.saveCart(cart)
//   }
//   getSingleButton(id) {
//     return buttonsDom.find(button => button.dataset.id === id)
//   }
// }

// class Storage {
//   static saveProducts(products) {
//     localStorage.setItem("products", JSON.stringify(products));
//   }

//   static getProduct(id) {
//     let products = JSON.parse(localStorage.getItem("products"));
//     return products.find(product => product.id === id);
//   }

//   static saveCart(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }

//   static getCart(cart) {
//     return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
//   }

// }
// document.addEventListener("DOMContentLoaded", () => {
//   const ui = new UI();
//   const products = new Products();

//   ui.setupaAPP()
//   products.getProducts().then(products => {
//     ui.displayProducts(products);
//     Storage.saveProducts(products);
//   }).then(() => {
//     ui.getBagButtons();
//     ui.cartLogic()
//   })
// });










// let movieList = []
// let getMovieList
// let movieListDom = document.querySelector("#tbody")
// let movieName = document.querySelector("#name")
// let movieImd = document.querySelector("#imd")

// let ourRequest = new XMLHttpRequest();
// ourRequest.open("GET", "movies.json", true);
// ourRequest.onload = function () {
//   var ourData = JSON.parse(ourRequest.responseText);
//   renderHtml(ourData);
//   localStorage.setItem("myobj", JSON.stringify(ourData));
//   let local = JSON.parse(localStorage.getItem("myobj"));
//   console.log(local);
// };
// ourRequest.send();
// function renderHtml(data) {
//   //  if(localStorage.getItem("myobj")){
//   //   var datas =  JSON.parse(localStorage.getItem("myobj"));
//   //   console.log(datas);
//   //  }
//   if (JSON.parse(localStorage.getItem("myobj"))) {
//     var local = localStorage.getItem("myobj");
//     var localjs = JSON.parse(local);
//     console.log("localJs: ", localjs);
//     // localjs.map((item) => {
//     //   // console.log("item: ", item);

//     //   // console.log(item);
//     // });
//     for(let i = 0; i < localjs.length; i++) {
//       console.log("localjs",localjs);
//       var htmlString = "";
//       htmlString += `<tr class="list">
//       <td class="photo">
//       <img src="${localjs[i].image}">
//       </td>
//       <td>${localjs[i].name}</td>
//       <td> ${localjs[i].imd}</td>
//       <td><i class="fas fa-edit edit" ></i><i class="fas fa-trash trash" onclick="Deletes(${i})"></i></td>
//       </tr>
//       `;
//         tbody.insertAdjacentHTML("beforeend", htmlString);

//     }
//   }
// }
// function Deletes(item2) {
//   let DeleteMovies = JSON.parse(localStorage.getItem("myobj"))
//   console.log(DeleteMovies);
//   DeleteMovies.splice(item2, 1)
//   localStorage.setItem("myobj", JSON.stringify(DeleteMovies))
//   // renderHtml() 
// }
// function Read() {
//   movieListDom.innerHTML = ""
//   getMovieList = JSON.parse(localStorage.getItem("movieList"))
//   if (getMovieList != null) {
//     if (getMovieList.length === 0) {
//     } else {
//       for (let i = 0; i < getMovieList.length; i++) {
//         movieListDom.innerHTML += `<tr class="list">
//                        <td class="photo"></td>
//                        <td>${getMovieList[i].movieName}</td>
//                        <td> ${getMovieList[i].movieImd}</td>
//                        <td><i class="fas fa-edit edit" onclick="Edit(${i})"></i><i class="fas fa-trash trash" onclick="Delete(${i})"></i></td>
//                        </tr>
//                        `;
//       }
//     }
//   }
// }

// function Create() {
//   const storage = JSON.parse(localStorage.getItem("movieList"))
//   let inputText = {}
//   inputText.movieName = movieName.value
//   inputText.movieImd = movieImd.value
//   if (inputText.movieName == "" && inputText.movieImd == "") {
//     alert("Mehsul elave et")
//     renderHtml(data)
//   } else {
//     if (storage === null) {
//       movieList.push(inputText)
//       localStorage.setItem("movieList", JSON.stringify(movieList))
//     } else {
//       movieList = JSON.parse(localStorage.getItem("movieList"))
//       movieList.push(inputText)
//       localStorage.setItem("movieList", JSON.stringify(movieList))
//     }
//   }
//   movieName.value = " "
//   movieImd.value = " "
// }

// function Delete(item) {
//   let DeleteMovie = JSON.parse(localStorage.getItem("movieList"))
//   DeleteMovie.splice(item, 1)
//   localStorage.setItem("movieList", JSON.stringify(DeleteMovie))
//   Read()
// }
// function Edit(item) {
//   console.log(item);
//   let editMovie = JSON.parse(localStorage.getItem("movieList"))
//   for (let i = 0; i < editMovie.length; i++) {
//     movieName.value = getMovieList[i].movieName
//     movieImd.value = getMovieList[i].movieImd
//     editMovie.splice(item, 1)
//     console.log(editMovie);

//   }
//   localStorage.setItem("movieList", JSON.stringify(editMovie))
//   Read()
// }
// document.getElementById("form").addEventListener("click", (e) => {
//   e.preventDefault();
//   // renderHtml()
//   Create();
//   Read();
// });
// document.addEventListener("DOMContentLoaded", () => {
//   // renderHtml()
//   Read();
// });
// function getFilmList() {
//   fetch("movies.json")
//     .then(response => response.json())
//     .then(movies => {
//       // console.log(data)
//       for ( i=0; movies.lenght>0 ; i++) {
//         localStorage.setItem("myobjW", JSON.stringify(movies));
//         table.innerHTML += `
//         <tr class="tableMovie">
//              <td class="col-3">
//               <img class="w-25" src="${movies.image}" />
//             </td>
//             <td>
//             <input type="text"  id="" value ="${movies.name}" />
//             </td>
//             <td>
//             <input type="text"  id="" value ="${movies.imd}" />
//             </td>
//             <td>
//               <button class="btn btn-warning" onclick="updateMovie(${movies.id})">Güncelle</button>
//               <button class="btn btn-danger" onclick="deleteMovie(${movies.id})">Sil</button> 
//             </td>
//       </tr>
//       `
//       }
//     })
// }
// getFilmList()

// function refreshData() {
//   getFilmList()
// }



// function createMovie() {
//   if (JSON.parse(localStorage.getItem("myobj")) !== null) {
//     movies = JSON.parse(localStorage.getItem("myobj"))
//   }
//   let data={
//     movie_name:document.getElementById("movieName").value || "qiymet yox",
//     movie_imd:document.getElementById("movieImd").value || "qiymet yox",
//   }
//     table.innerHTML += `
//     <tr class="tableMovie">
//          <td class="col-3">
//          <img src=""/>
//         </td>
//         <td>
//         <input type="text"  id="" value ="${data.movie_name}" />
//         </td>
//         <td>
//         <input type="text"  id="" value ="${data.movie_imd}" />
//         </td>
//         <td>
//           <button class="btn btn-warning" onclick="updateMovie(${data.id})">Güncelle</button>
//           <button class="btn btn-danger" onclick="deleteMovie(${data.id})">Sil</button> 
//         </td>
//   </tr>
//   `
//   localStorage.setItem("myobj", JSON.stringify(movies));
// }
// createMovie()


// function saveLocal() {
//   localStorage.setItem("myobj", JSON.stringify(movies));
// }




const table = document.getElementById("userTable")
const movieName = document.getElementById("movieName")
const movieImd= document.getElementById("movieImd")
const userTable = document.getElementById("userTable")
const trashBtn = document.getElementsByClassName("trashBtn")
const updateBtn = document.getElementsByClassName("updateBtn")
const name = document.getElementById("name")
const imd = document.getElementById("imd")
function firstTimeSaveLocal() {
  let localGetMovies = JSON.parse(localStorage.getItem("myMovies"));
  if (localGetMovies === null) {
      localStorage.setItem("myMovies", JSON.stringify(movies)); 
    }
}
firstTimeSaveLocal()

function saveLocal() {
  for (let i = 0; i < movies.length; i++) {
    movies[i].id = i.toString()
  }
  localStorage.setItem("myMovies",JSON.stringify(movies))
}

function WriteMovie() {
  table.innerHTML = ""
  movies = JSON.parse(localStorage.getItem("myMovies"))
  for (let i = 0; i < movies.length; i++) {
    table.innerHTML += `
      <tr class="tableMovie">
           <td class="col-3">
            <img class="w-25" src="${movies[i].image}" />
          </td>
          <td>
          <input type="text" id="name"   value ="${movies[i].name}" />
          </td>
          <td>
          <input type="text"  id="imd" value ="${movies[i].imd}" />
          </td>
          <td>
            <button class="updateBtn btn-warning"  data-id="${movies[i].id}">Güncelle</button>
            <button class="trashBtn btn-danger" data-id="${movies[i].id}">Sil</button> 
          </td>
    </tr>
    `
  }
}
WriteMovie()

function createMovie() {
  if (movieName.value !== "" && movieImd.value !== "") {
    movies.push(
      {
        "name": `${movieName.value}`,
        "imd": `${movieImd.value}`,
        "image":  "dummy.jpg",
        "id": movies.length.toString()
      }
    )
  } 
  movieName.value = "" 
  movieImd.value = ""
  saveLocal()
  WriteMovie()
}

userTable.addEventListener("click",function(e){
  if (e.target.classList.contains("trashBtn")) {
    let id = e.target.dataset.id
    console.log(id);
    movies.splice(id, 1)
    saveLocal();
    createMovie()
  }
  if (e.target.classList.contains("updateBtn")) {
    let id = e.target.dataset.id
    console.log(id);
    console.log(movieName.value);
    movies.splice(id, 1)
    saveLocal();
    createMovie()
  }
})