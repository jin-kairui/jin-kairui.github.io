// ghost img 
let ghost = document.getElementById('ghost');
let ghost_img = document.getElementById("ghost_img");

//text
let text = document.getElementById('text');
let textbox = document.getElementById('textbox');

//background scenery 
let scenery = document.getElementById("time");

//status img 
let status_bar = document.getElementById("status_bar");
var statusCounter = 0;

if (statusCounter == 1){
    $(document).ready(function() {
        $(status_bar).attr("src", "assets/yellowbar.PNG");
    });
}

function upStatus() {
    statusCounter += 1;
    document.getElementById("happiness").innerHTML = happiness;
};

function resetStatus() {
    statusCounter = 0;
};

$(document).ready(function() {
    $(text).click(function() {
        $(status_bar).attr("src", "assets/yellowbar.PNG");
    });
});

//action buttons 
let love = document.getElementById("love");
let chat = document.getElementById("chat");
let music = document.getElementById("music");
let clock = document.getElementById("clock");

//body 
let theBody = document.querySelector('body');

$(document).ready(function() {
    $(love).click(function() {
        $(ghost_img).attr("src", "assets/heartboo.PNG");
    });
    upStatus();
});

$(document).ready(function() {
    $(chat).click(function() {
        $(ghost_img).attr("src", "assets/chatboo.PNG");
    });
});

$(document).ready(function() {
    $(music).click(function() {
        $(ghost_img).attr("src", "assets/danceboo.PNG");
        $(status_bar).attr("src", "assets/yellowbar.PNG");
        // play music here 
    });
});

// reset ghost to normal 
$(document).ready(function() {
    $(ghost_img).click(function() {
        $(ghost_img).attr("src", "assets/normalboo.PNG");
       
        resetStatus();
    });
});

// get the clock to choose the other background no matter what it's on 
$(document).ready(function() {
    $(clock).click(function() {
        $(scenery).attr("src", "assets/day.PNG");
    });
});
