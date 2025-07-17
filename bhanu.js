/*var c = document.getElementById("canvas");
var ctx = c.getContext("2d"); 

ctx.font = "30px Arial";
ctx.fillText("hello world",30,30);
this is example of canvas and downward exammple of canvas */

/*
function myCanvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");

    ctx.drawImage(img,0,0,300,277);
}
    
downward is example of media video*/
/*window.onload = function(){
    var myVideo = document.getElementById("video1");

window.playPause = function(){
    if(myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
};
window.makeBig = function(){
    myVideo.width = 600;
};
window.makeSmall = function(){
    myVideo.width = 200;
};
window.makeNormal = function(){
    myVideo.width = 420;
};
};


example API */

/*window.onload = function(){
    const x = document.getElementById("bhanu");

    window.getLocation = function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success,error);
        }else{
            x.innerHTML = "your browser not support location"
        }

        function success(position){
            x.innerHTML = "Latitude : " + position.coords.latitude + "<br> Longitude : " + position.coords.longitude;
        }
        function error(error){
            switch(error.code){
                case error.PERMISSION_DENIED:
                    x.innerHTML = "user denied the request for geolocation"
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "location information is unavailable"
                    break;
                case error.TIMEOUT:
                    x.innerhtml = "time is out"
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "an unknown error occured"
                    break;
            }
        }
    }
};


drag and drop Api example*/

/*window.onload = function(){

    window.dragstartHandler = function(ev){
        ev.dataTransfer.setData("text" , ev.target.id);
    };
    window.dragoverHandler = function(ev){
        ev.preventDefault();
    };
    window.dropHandler = function(ev){
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    };
};


session and local storage API*/
/*
window.onload = function () {
    window.clickCount = function () {
        const x = document.getElementById("bhanu");

        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.clickcount) {
                sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            } else {
                sessionStorage.clickcount = 1;
            }
            x.innerHTML = "You clicked the counter " + sessionStorage.clickcount + " time(s)";
        } else {
            x.innerHTML = "Your browser does not support web storage.";
        }
    };
};


*/
