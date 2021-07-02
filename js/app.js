window.onload = ()=>{

  let navigation_nav = document.querySelector(".navigation_nav");
  navigation_nav.addEventListener("click", function(){

    let navigation_list = document.querySelectorAll(".navigation_item")
    navigation_list.forEach(element =>{
      element.addEventListener("click", function(){
          navigation_nav.checked = false;
      })
    })
  })
};