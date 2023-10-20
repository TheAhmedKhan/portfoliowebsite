var Menu=document.querySelector("#Menu")
var toggleBox=document.querySelector(".togglebox")
var Close=document.querySelector("#close")

function toggleOut() {
	toggleBox.style.display="flex"
}



Menu.addEventListener("click" , ()=>{
	Menu.style.display="none"
	toggleOut()
})

Close.addEventListener("click",()=>{
	toggleBox.style.display="none"
		Menu.style.display="flex"

})

