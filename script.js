var menu = document.getElementById("menu-list")
menu.style.maxHeight = "0px";


function togglemenu(){
    if(menu.style.maxHeight == '0px' ){
        menu.style.maxHeight = "120px";
        menu.style.padding = "12px"
    }else{
        menu.style.maxHeight = "0px";
        menu.style.padding = "0px"
    }
    
}