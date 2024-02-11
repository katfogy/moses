const Hamburger=document.getElementById('open')
const closebtn=document.getElementById('close')
const lists=document.getElementById('list-items');

Hamburger.addEventListener('click',()=>{
    lists.classList.toggle('display')
    closebtn.classList.toggle('show')
})

closebtn.addEventListener('click',()=>{
    lists.classList.toggle('display')
    closebtn.classList.toggle('show')

})

lists.addEventListener('click',(e)=>{
    if(e.target.classList.contains('item')){
        lists.classList.toggle('display')
        closebtn.classList.toggle('show')
    }
})