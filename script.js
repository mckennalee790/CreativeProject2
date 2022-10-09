//Home Page
document.getElementById("Submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value1 = document.getElementById("Input1").value;
  const value2 = document.getElementById("Input2").value;
  if (value1 === "" || value2 === "")
    return;
  /*global fetch*/
  const url = "https://rps101.pythonanywhere.com/api/v1/match?object_one=" + value1 + "&object_two=" + value2;
  //display current
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      //results += "<h2>Results: </h2>";
      results += "<div class=wCont>"
      results += "<h1>WINNER!!!</h1>"
      results += "<p class = 'winner'>" + json.winner + "</p>";
      results += "</div>"
      results += "<div class=oCont>"
      results += "<p class = 'outcome'>"+ json.winner + " " + json.outcome + " " + json.loser +"</p>";
      results += "</div>"
      results += "<div class=lCont>"
      results += "<h1>LOSER :( </h1>"
      results += "<p class = 'loser'>" + json.loser + "</p>";
      results += "</div>"
      document.getElementById("Results").innerHTML = results;
    });
      
});


//Strategize page
debugger
document.getElementById("Submit1").addEventListener("click", function(event) {
  event.preventDefault();
  const value3 = document.getElementById("Input3").value;
  if (value3 === "")
    return;
  const url1 = "https://rps101.pythonanywhere.com/api/v1/objects/" + value3;
   
  fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let arr = json['winning outcomes'];
      let strategy = "";
      for (let i = 0; i < json['winning outcomes'].length; i++){
        strategy += "<p>" + arr[i][1] + "</p>";
      }
      document.getElementById("forecastResults").innerHTML = strategy;
    });
});
