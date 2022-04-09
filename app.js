let list = document.getElementById("list");
let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "movies.json", true);
ourRequest.onload = function () {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHtml(ourData);
};
ourRequest.send();

function renderHtml(data) {
  var htmlString = "";

  for (let i = 0; i < data.length; i++) {
    htmlString += `
    <div class="col-md-3 mb-5">
    <div class="imgbox">
        <img src="${data[i].image}" alt="">
    </div>
    <h5 class="name mt-3"> ${data[i].name} <p class="imd">Imd: ${data[i].imd}</p></h5>
</div>
    `;
  }
  list.insertAdjacentHTML("beforeend", htmlString);
}

let search = document.getElementById("search");

search.addEventListener("keyup", function () {
  var ourData = JSON.parse(ourRequest.responseText);
  value = this.value;
  var data = searchTable(value,ourData)
  renderHtml(data);
  let list = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0]
  console.log(list);
  function searchTable(value,data) {
     let filter = [];
     for (let i = 0; i < data.length; i++) {
      value = value.toLowerCase();
      var name = data[i].name.toLowerCase();
      if (name.includes(value)) {
        filter.push(data[i]);
        list.style.display = "none"
      }
    }
    console.log(filter);
    return filter;
  }
});


