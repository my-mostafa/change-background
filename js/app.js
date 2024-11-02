let btn = document.querySelector("#btn")

let flag = true

btn.addEventListener("click",function(){
    if(flag){
        localStorage.setItem("temp","tempdark")
        document.body.setAttribute("class",localStorage.getItem("temp"))
        flag = false
    }else{
        localStorage.clear()
        document.body.classList.remove("tempdark")
        flag = true
    }
})

window.addEventListener("load",function(){
    document.body.setAttribute("class",localStorage.getItem("temp"))

})