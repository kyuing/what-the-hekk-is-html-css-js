function toggleBtn() {

  let toggler = document.getElementById("myId");
  
  // console.log(toggler.style.display);
 
  // show "Hello World"
  if (toggler.style.display === "" || toggler.style.display === "none") {  
    
    toggler.style.display = "block";
  
  }else { // hide "Hello World"
    toggler.style.display = "none";
  }

}