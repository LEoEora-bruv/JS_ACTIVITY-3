var buttonname = document.getElementById('changeName');
var studentname = document.getElementById('studentName');
var changeOne = document.getElementById('changeBackground');
var changeTwo = document.getElementById('profile');
var changethree = document.getElementById('toggleDetails');
var changefour = document.getElementById('details');
var changeit = false;

buttonname.addEventListener("click", function(){
        studentname.textContent = "Rojen Atasin";
    }
)

changeOne.addEventListener("click", function(){
        if (changeit == false){
            changeTwo.style.backgroundColor = "#c1456e";
            changeit = true;
        }
        else{
            changeTwo.style.backgroundColor = "#2a9089d4";
            changeit = false;
        }
    }
)

changethree.addEventListener("click", function(){
        if (changefour.style.display === "none"){
            changefour.style.display = "block";
        }
        else{
            changefour.style.display = "none";
        }
    }
)