// Add the coffee to local storage with key "coffee"
async function getData(){
    let url= "https://masai-mock-api.herokuapp.com/coffee/menu"

    let res=await fetch(url)

    let data=await res.json()
    console.log(data)
}
function append(data){
let container=document.getElementById("myCoffee");
container.innerHTML=null;

data.forEach(function(el){
    console.log(el.title)
    let p = document.createElement("p")
    p.innerText = el.title
    container.append(p)
})   
}


getData()