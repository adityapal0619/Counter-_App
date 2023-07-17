const count=document.querySelector(".count")
const sub=document.querySelector('.subtration')
const reset=document.querySelector('.reset')
const add=document.querySelector('.Add')

add.addEventListener("click",() => {
    count.innerHTML++;
})

sub.addEventListener("click",()=>{
    count.innerHTML--;
})

reset.addEventListener("click",()=>{
    count.innerHTML=0;
})