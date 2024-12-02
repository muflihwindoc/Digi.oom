const togglebtn = document.querySelector('.toggle')
const dropdownmenu = document.querySelector('.dropdownmenu')

togglebtn.onclick = function(){
    dropdownmenu.classList.toggle('open')
}