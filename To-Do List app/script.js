const inputBox=document.getElementById('input-Box');
const taskList=document.getElementById('taskList')

function addTask(){
    if (inputBox.value==''){
        alert("plase enter task")
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value;
        taskList.appendChild(li);

        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value=''
    SaveList();
}

taskList.addEventListener('click',(e)=>{

        if(e.target.tagName==='LI'){
            e.target.classList.toggle('checked')
            SaveList();
        }
        else if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove()
            SaveList();
        }
})

function SaveList(){
    localStorage.setItem('data',taskList.innerHTML)
}
function showList(){
    taskList.innerHTML=localStorage.getItem('data')
}
showList();