const buttons = document.querySelectorAll('.category');
const items = document.querySelectorAll(".items");


buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        // prevent button from going to top when click
        e.preventDefault();
        const filter= e.target.dataset.filter;

        items.forEach((item)=> {
          if(filter === "all"){
              item.style.display = "block";
          }else {
              if (item.classList.contains(filter)){
                  item.style.display = "block";

              }else {
                item.style.display = "none";
              }
            }
          
        })
    })
})

const search = document.querySelector("#search-box");
const notice = document.querySelector(".notice");

search.addEventListener("keyup", e =>{
    const searchFilter = e.target.value.toLowerCase().trim();

    items.forEach((item) =>{
        if(item.textContent.includes(searchFilter)){
            item.style.display = "block";
            notice.style.display = "none";
        }else{
            if(item.style.display == "block"){
                for(let i= 0; i < items.length ; i++){
                   collect = items[i].style.display = "none";
                }
                notice.style.display = "block";
            }
            
        }

    })
})