let tbody = document.getElementById("tbody");
let ourRequest = new XMLHttpRequest();
let plus2 = document.querySelector(".plus2");
let name = document.querySelector("#name");
let imd = document.querySelector("#imd");
ourRequest.open("GET", "movies.json", true);
ourRequest.onload = function () {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHtml(ourData);
  let local = JSON.parse(localStorage.getItem("ad"));
  localStorage.setItem("add", JSON.stringify(ourData));
  console.log(local);
};
ourRequest.send();
function renderHtml(data) {
  var htmlString = "";

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

  let list = tbody.getElementsByClassName("list");
  for (let i = 0; i < list.length; i++) {
    let edit = document.querySelectorAll(".edit");
    // console.log(list);
    edit[i].addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      name.value = this.parentElement.parentElement.children[1].textContent;
      imd.value = this.parentElement.parentElement.children[2].textContent;
    });
  }

  for (let i = 0; i < list.length; i++) {
    let trash = document.querySelectorAll(".trash");
    trash[i].addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  }
}

plus2.addEventListener("click", function () {
  if (name.value == "" && imd.value == "") {
    alert("Xanani doldurun.");
  } else {
    var htmlString = "";
    htmlString += `<tr class="list">
    <td class="photo"></td>
    <td>${name.value}</td>
        <td> ${imd.value}</td>
        <td><i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i></td>
    </tr>
    `;
    name.value = " ";
    imd.value = " ";
    tbody.insertAdjacentHTML("beforeend", htmlString);
  }

  // let edit = document.querySelector(".edit");
  // let trash = document.querySelectorAll(".trash");
  // let list = document.querySelectorAll(".list");
  // for (let i = 0; i < list.length; i++) {
  //   console.log(list);
  //   edit[i].addEventListener("click", function () {
  //     alert("qdad");
  //     console.log(edit);
  //   });
  // }
});
