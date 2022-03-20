
const find = document.getElementById('findbutton');


find.onclick = function() {
    var x = document.getElementById("cityfield").value;
    var y = document.getElementById("textfield").value;
    
    var city = fetchCity(`http://localhost:8090/api/city/${x}`);
    
    var product = fetchAsync(`http://localhost:8090/api/articles/${y}`);
    console.log(city);   
    console.log(product);
 

}



async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}


async function fetchCity(url) {
    const fetchPromise = fetch(url);
    fetchPromise.then(response => {
      return response.json();
    
    }).then(data => {
      console.log(data[0].CodesPostaux0);

      return data;
    });
}



