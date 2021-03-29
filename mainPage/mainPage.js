// Get the modal
  var modal = document.getElementById("myModal");
  var livestockModal = document.getElementById("livestockModal");
  var familyModal = document.getElementById("familyModal");
  var labourModal = document.getElementById("labourModal");
  var grassModal = document.getElementById("grassModal");

  
  // Get the button that opens the modal
  var btn = document.getElementById("myCrops");
  var btnLivestock = document.getElementById("myLivestocks");
  var btnFamily = document.getElementById("myFamily");
  var btnLabour = document.getElementById("myLabour");
  var btnGrass = document.getElementById("myGrass");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var spanLivestock = document.getElementsByClassName("closeLivestock")[0];
  var spanFamily = document.getElementsByClassName("closeFamily")[0];
  var spanLabour = document.getElementsByClassName("closeLabour")[0];
  var spanGrass = document.getElementsByClassName("closeGrass")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  btnLivestock.onclick = function() {
    livestockModal.style.display = "block";
  }

  btnFamily.onclick = function() {
    familyModal.style.display = "block";
  }

  btnLabour.onclick = function() {
    labourModal.style.display = "block";
  }

  btnGrass.onclick = function() {
    grassModal.style.display = "block";
  }



  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  spanLivestock.onclick = function() {
    livestockModal.style.display = "none";
  }

  spanFamily.onclick = function() {
    familyModal.style.display = "none";
  }


  spanLabour.onclick = function() {
    labourModal.style.display = "none";
  }

  spanGrass.onclick = function() {
    grassModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// For Pepper
  document.getElementById("pepper").addEventListener("keyup", TotalPepper);
  document.getElementById("pepper").addEventListener("click", TotalPepper);
  function TotalPepper(){
      quantity = document.getElementById('pepper').value
      price = 100
      document.getElementById('resultPepper').innerHTML= "BUY FOR AHF " + quantity*price
  }

  // For Hen
  document.getElementById("hen").addEventListener("keyup", TotalHen);
  document.getElementById("hen").addEventListener("click", TotalHen);
  function TotalHen(){
      quantity = document.getElementById('hen').value
      price = 500
      document.getElementById('resultHen').innerHTML= "BUY FOR AHF " + quantity*price
  }

// For Beans
document.getElementById("beans").addEventListener("keyup", TotalBeans);
document.getElementById("beans").addEventListener("click", TotalBeans);
function TotalBeans(){
    quantity = document.getElementById('beans').value
    price = 200
    document.getElementById('resultBeans').innerHTML= "BUY FOR AHF " + quantity*price
}

// for Goat
document.getElementById("goat").addEventListener("keyup", TotalGoat);
  document.getElementById("goat").addEventListener("click", TotalGoat);
  function TotalGoat(){
      quantity = document.getElementById('goat').value
      price = 700
      document.getElementById('resultGoat').innerHTML= "BUY FOR AHF " + quantity*price
  }

// For Maize
document.getElementById("maize").addEventListener("keyup", TotalMaize);
  document.getElementById("maize").addEventListener("click", TotalMaize);
  function TotalMaize(){
      quantity = document.getElementById('maize').value
      price = 250
      document.getElementById('resultMaize').innerHTML= "BUY FOR AHF " + quantity*price
  }

  // for Cow
document.getElementById("cow").addEventListener("keyup", TotalCow);
document.getElementById("cow").addEventListener("click", TotalCow);
function TotalCow(){
    quantity = document.getElementById('cow').value
    price = 1000
    document.getElementById('resultCow').innerHTML= "BUY FOR AHF " + quantity*price
}

  // For Coffee
  document.getElementById("coffee").addEventListener("keyup", TotalCoffee);
  document.getElementById("coffee").addEventListener("click", TotalCoffee);
  function TotalCoffee(){
      quantity = document.getElementById('coffee').value
      price = 300
      document.getElementById('resultCoffee').innerHTML= "BUY FOR AHF " + quantity*price
  }


  // For Tomato
  document.getElementById("tomato").addEventListener("keyup", TotalTomato);
  document.getElementById("tomato").addEventListener("click", TotalTomato);
  function TotalTomato(){
      quantity = document.getElementById('tomato').value
      price = 400
      document.getElementById('resultTomato').innerHTML= "BUY FOR AHF " + quantity*price
  }

    var i = 0;
    var txt = `Abu has a wife and 5 children, 2 sons and 3 daughters who depend on him daily to provide for their needs. Abu's oldest daughter, Simbi just finished secondary school and has gained admission to the Wakanda university, but there is no money to pay her fees. Abu's first and second sons, Ali and Usman are in secondary school, but they are always sent back home because they are unable to pay their school fees. Ali has also started moving around with some bad boys in the neighbourhood...`;
    var speed = 50;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("writing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter()


  