function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = '#D9CD0B'
    }
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

//modificacion 1//

// ele = document.getElementById('ele1')
// ele.addEventListener("click", function (){
    // ele.style.backgroundColor = 'yellow'
// })

//modificacion 2//


// pintar = (ele, color = 'green') => ele.style.backgroundColor = color
// ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele, 'yellow'))
