const checkboxes = document.querySelectorAll('.topic');
window.onload=function(){
checkboxes.forEach(box,index) => {
    box.addEventListener('change',updateProgress);
});
    let saved=localStorage.getItem("checkbox"+index);
    if(saved=="true"){
        box.checked=true;
    }
    box.addEventListener('change',()=>{
        localStorage.setItem(
            "checkbox"+ index,
            box.checked
        );
        updateProgress();
});
});
  updateProgress();
};
function updateProgress(){

    let total = checkboxes.length;

    let completed = 0;

    checkboxes.forEach(box => {
        if(box.checked){
            completed++;
        }
    });

    let percentage = Math.round((completed / total) * 100);

    document.getElementById('progressText').innerText =
    "Progress: " + percentage + "%";

    document.getElementById('progress').style.width =
    percentage + "%";
}
function saveGoal(){

    let goal =
    document.getElementById("goal").value;

    localStorage.setItem(
        "dailyGoal",
        goal
    );

    document.getElementById("savedGoal")
        .innerText =
        "Today's Goal: " + goal;
}

let savedGoal =
localStorage.getItem("dailyGoal");

if(savedGoal){

    document.getElementById("savedGoal")
        .innerText =
        "Today's Goal: " + savedGoal;
}
function saveNotes(){
    let notes =document.getElementById("notes").value;
    localStorage.setItem("notes,notes");
alert("notes saved successfully!");
 }