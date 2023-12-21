
//closing the popup
function closebtn(){
   
    let closepopup = document.getElementById("pop");
    closepopup.style.display = "none";
    console.log(close);
   
}
let _location = document.getElementById("location")
//get device location
function  getlocation(){
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition());
}else{
    _location.innerhtml ="location not found"

}
}
function showPosition(position){
    _location.innerhtml = position.coords.latitude +"<br>"+ position.coords.longitude 

}
