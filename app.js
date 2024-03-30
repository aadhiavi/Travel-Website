
function navSlide() {
    const nav = document.querySelector(".navbar");
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");


    burger.addEventListener("click", () => {
        menu.classList.toggle("nav-active");

        burger.classList.toggle("toggle")


    })
}
navSlide()

let loadMoreBtn = document.querySelector("#clickMe");
    let currentItem = 4;
     
    loadMoreBtn.onclick = () =>{
      let boxes = [...document.querySelectorAll('.section4 .container5 .box10')] ;
      for(var i=currentItem;i<currentItem + 4; i++) {
        boxes [i].style.display = 'inline-block';
      }
        currentItem += 4

        if(currentItem>=boxes.length){
            loadMoreBtn.style.display = 'none';
        }
    }


    let loadMoreBtn1 = document.querySelector("#seeMore");
    let currentItem1 = 3;
     
    loadMoreBtn1.onclick = () =>{
      let boxes1 = [...document.querySelectorAll('.section6 .container8 .box11, .box12, .box13, .box14, .box15, .box16')] ;
      for(var i=currentItem1;i<currentItem1 + 3; i++) {
        boxes1 [i].style.display = 'inline-block';
      }
        currentItem1 += 3
        if(currentItem1>=boxes1.length){
            loadMoreBtn1.style.display = 'none';
        }
    }

