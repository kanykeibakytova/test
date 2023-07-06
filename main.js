const input =document.querySelector("input")
const btn=document.querySelector(".btn")
const ul=document.querySelector("ul")

// localStorage.setItem("test", JSON.stringify([{title:"Name"}]))
function view (){
    let task=JSON.parse(localStorage.getItem("test")) || []
    let allList=''
    task.map(el=>{
        allList+=`<li class="list-group-item my-1">${el.title}</li>`
    })
    ul.innerHTML=allList
    input.value=''
}
view()

btn.addEventListener("click", ()=>{
    let task=JSON.parse(localStorage.getItem("test")) || []
    let newList={
        title:input.value,
    }
    task=[...task,newList]
    localStorage.setItem("test", JSON.stringify(task))
    view()
})
