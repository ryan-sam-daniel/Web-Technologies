let count=document.getElementById("area").value
const incre=document.getElementById("increment")
const decre=document.getElementById("decrement")
const reset=document.getElementById("reset")

incre.addEventListener('click',(e)=>{
    count= Number(count) + 1
    let out=document.getElementById("area")
    out.value=count
    e.preventDefault(); 
    
})

decre.addEventListener('click',(e)=>{
    count=count-1
    out=document.getElementById('area')
    out.value=count
    e.preventDefault();
})

reset.addEventListener('click', (e)=>{
    count=0
    out.value=count;
    e.preventDefault();
})
