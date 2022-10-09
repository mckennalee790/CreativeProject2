//Strategize page

document.getElementById("Submit1").addEventListener("click", function(event) {
  event.preventDefault();
  debugger
  const value3 = document.getElementById("Input3").value;
  if (value3 === ""){
    console.log("Invalid input");
    return;
 }
  const url1 = "https://rps101.pythonanywhere.com/api/v1/objects/" + value3;
  /*global fetch*/
  fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let arr = json['winning outcomes'];
      let strategy = "";
      for (let i = 0; i < json['winning outcomes'].length; i++){
        strategy += "<div id='b'>"
        strategy += "<p>" + arr[i][1] + "</p>";
        strategy += "</div>"
      }
      document.getElementById("forecastResults").innerHTML = strategy;
    });
});