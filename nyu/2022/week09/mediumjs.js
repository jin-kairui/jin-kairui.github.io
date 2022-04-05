console.log("The Medium Is The Massage")

var pointOne = document.getElementById("pOne");
pointOne.addEventListener('click', funcone);
function funcone(){
    pointOne.onclick = function(){
        pointOne.innerHTML = "It has restructured the daily patterns of our lives, for there is no point in attempting today's job with yesterday's tools."
    }
}

var pointTwo = document.getElementById('pTwo');
pointTwo.addEventListener('click', functiontwo);
function functiontwo(){
    pointTwo.onclick = function(){
        pointTwo.innerHTML = "Information is constantly churned, and then remixed and re-presented within different contexts of different mediums. "
    }
}

var pointThree = document.getElementById('pThree');
pointThree.addEventListener('click', functionthree);
function functionthree(){
    pointThree.onclick = function(){
        pointThree.innerHTML = "There are consistently more convenient methods to complete tasks, perhaps convenience beyond necessity."
    }
}

var pointFour = document.getElementById('pFour');
pointFour.addEventListener('click', functionfour);
function functionfour(){
    pointFour.onclick = function(){
        pointFour.innerHTML = "Technology has created \"one big gossip column that is unforgiving, unforgetful and from which there is no redemption.\""
    }
}
