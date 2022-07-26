function toggleBtn() {

  let toggler = document.getElementById("myId");
  
  if (toggler.style.display === "none" || toggler.style.display === "") {  
    
    toggler.style.display = "block";
  
  }else {
    toggler.style.display = "none";
  }

}