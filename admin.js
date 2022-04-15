let tbody = document.getElementById("tbody");
let plus2 = document.querySelector(".plus2");
let name = document.querySelector("#name");
let imd = document.querySelector("#imd");
let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "movies.json", true);
ourRequest.onload = function () {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHtml(ourData);
  // localStorage.setItem("adlar", JSON.stringify(ourData));
  // let local = JSON.parse(localStorage.getItem("adlar"));
  // console.log(local[0].name);
};
ourRequest.send();
function renderHtml(data) {
  var htmlString = "";
  //  if(localStorage.getItem("myobj")){
  //   var datas =  JSON.parse(localStorage.getItem("myobj"));
  //   console.log(datas);
  //  }
  if (JSON.parse(localStorage.getItem("myobj"))) {
    var local = localStorage.getItem("myobj");
    var localjs = JSON.parse(local);
    console.log("localJs: ", localjs);
    localjs.map((item) => {
      console.log("item: ", item.name);
      var htmlString = "";
      htmlString += `<tr class="list">
    <td class="photo"></td>
    <td>${item?.name}</td>
    <td> ${item?.imd}</td>
    <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
    </tr>
    `;
      tbody.insertAdjacentHTML("beforeend", htmlString);
    });
  }

  for (let i = 0; i < data.length; i++) {
    htmlString += `<tr class="list">
    <td class="photo"> <img src="${data[i].image}" alt=""></td>
    <td>${data[i].name}</td>
    <td> ${data[i].imd}</td>
    <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
    </tr>
    `;
  }
  tbody.insertAdjacentHTML("beforeend", htmlString);
  var anotherList = document.querySelectorAll(".list");
  for (let i = 0; i < anotherList.length; i++) {
    let trashList = document.querySelectorAll(".trash");
    trashList.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        this.parentElement.parentElement.remove();
      });
    });
  }

  for (let i = 0; i < anotherList.length; i++) {
    let editList = document.querySelectorAll(".edit");
    editList.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        this.parentElement.parentElement.remove();
        name.value = this.parentElement.parentElement.children[1].textContent;
        imd.value = this.parentElement.parentElement.children[2].textContent;
        console.log("valideyn", this.parentElement.parentElement.children);
      });
    });
  }

  console.log("anotherLsit", anotherList);
}

plus2.addEventListener("click", function () {
  var movies = [];
  if (
    name.value == null ||
    imd.value == null ||
    name.value == "" ||
    imd.value == ""
  ) {
    alert("Xanani doldurun.");
  } else {
    let movie = {};
    console.log("initiailmoviem", movie);
    movie.name = name.value;
    movie.imd = imd.value;
    if (JSON.parse(localStorage.getItem("myobj") === null)) {
      movies.push(movie);
      localStorage.setItem("myobj", JSON.stringify(movies));
    } else {
      var data = JSON.parse(localStorage.getItem("myobj"));
      data.push(movie);
      localStorage.setItem("myobj", JSON.stringify(data));
      console.log("myData", data);
      console.log("dataname", movie.name);
    }

    var local = localStorage.getItem("myobj");
    var localjs = JSON.parse(local);
    console.log("localJs: ", localjs);
    localjs.map((item) => {
      console.log("item: ", item.name);
      var htmlString = "";
      htmlString += `<tr class="list">
    <td class="photo"></td>
    <td>${item?.name}</td>
    <td> ${item?.imd}</td>
    <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
    </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", htmlString);
    });
    console.log(movie.name);
    name.value = "";
    imd.value = "";
    // var anotherList = document.querySelectorAll(".list");
    // localStorage.setItem("moviesss", JSON.stringify(htmlString));
    // var local = localStorage.getItem("moviesss");
    // var localjs = JSON.parse(local)
    // console.log(htmlString);
    // console.log(localjs);
  }
  var anotherList = document.querySelectorAll(".list");
  for (let i = 0; i < anotherList.length; i++) {
    let uniqueTrash = document.querySelectorAll(".trash");
    uniqueTrash.forEach((trash, index) => {
      trash.addEventListener("click", function (e) {
        this.parentElement.parentElement.remove();
      });
    });
  }

  for (let i = 0; i < anotherList.length; i++) {
    let uniqueList = document.querySelectorAll(".edit");
    uniqueList.forEach((edit, index) => {
      edit.addEventListener("click", function (e) {
        this.parentElement.parentElement.remove();
        name.value = this.parentElement.parentElement.children[1].textContent;
        imd.value = this.parentElement.parentElement.children[2].textContent;
      });
    });
  }
});
console.log(document.querySelectorAll(".list"));
