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
    <div class="col-md-3 mb-5 movie">
    <div class="imgbox">
        <img src="${data[i].image}" alt="">
    </div>
    <h5 class="name mt-3"> ${data[i].name} <p class="imd">Imd: ${data[i].imd}</p></h5>
    <div class="price">Price:${data[i].price}</div>
    <div class="icons">
      <i class="fa-solid fa-basket-shopping"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-eye"></i>
    </div>
</div>
    `;
    let movie = document.getElementsByClassName(".movie")

  }
  list.insertAdjacentHTML("beforeend", htmlString);
}


$(document).ready(function(){  
  $('#search').keyup(function(){  
       search($(this).val());  
  });  
  function search(value){  
       $('#list .movie').each(function(){  
            var found = 'false';  
            $(this).each(function(){
                if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) 
                 {  
                      found = 'true';  
                 }  
            });  
            if(found == 'true')  
            {  
                 $(this).show();  
            }  
            else  
            {  
                 $(this).hide();  
            }  
       });  
  }  
});  


let basket = document.querySelector(".basket2")
basket.addEventListener("click",function(){
  alert("ax")
})


