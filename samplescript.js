const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

buttonname.addEventListener("click", function(){
    studentname.textContent = "Maria Santos";
}

)