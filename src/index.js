import { home } from "./home";
import { menuContent }    from "./menu"
import { empty } from "./empty";

document.addEventListener('DOMContentLoaded',(e)=>{
    home()
})

const btnMenu = document.querySelector("#menu")
btnMenu.addEventListener("click", function(e){
    e.preventDefault();
  empty();
    menuContent()

})
