// var notifCountElem = document.querySelector("#fbNotificationsJewel>a.jewelButton .jewelCount>#notificationsCountValue");
// notifCountElem.innerHTML = 200;
window.onload = function(){
    console.log("No ads now !");
    var ads = document.querySelectorAll(".fbUserPost");
    var len_ads = ads.length;
    for (var i = 0; i < len_ads; i++){
        try{
            if(ads[i].querySelector(".fbUserPost").children[0].children[0].children[1].querySelectorAll("a")[2].innerHTML === "Sponsored"){
                ads[i].style.display = "none";
            }
            if(ads[i].children[0].children[1].children[1].querySelectorAll("a")[2].innerHTML === "Sponsored"){
                ads[i].style.display = "none";
            }
        }catch(err){}
    }
}
