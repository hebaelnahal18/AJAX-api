// API Application programming interface
// AJAX
function getData() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let result = this.responseText; //string 
      let photos=JSON.parse(result) //from string to json(array of object)
      // console.log(photos);
    let data='';
    photos.forEach((photo) => {
      data+=`
             <div class="md:col-4  text-center">
        <img src="${photo.url}" alt="" class="w-100">
        <h4>${photo.title}</h4> 
        <h6>${photo.id}</h6>
      </div>
          `      
    });
    document.querySelector('.row').innerHTML=data
       
}
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true); // true to be async
  xhttp.send();
}

// document.getElementById("click").addEventListener("click", () => {
//   try {
//     getData();
//   } 
//   catch (error) {
//     console.error(error);
//   }
// });
getData();

