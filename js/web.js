
// backToTheTop  //

let body = document.querySelector('body');
let backToTheTop = document.querySelector(".backToTheTop");
const scrollProgress = (event) => {
    
    let bodyHeight = body.clientHeight - window.innerHeight;
    let scrollTop = Math.round(window.scrollY);
    let percentage = Math.round((100 / bodyHeight) * scrollTop);
    

    backToTheTop.style.backgroundImage = `conic-gradient(blue 0% ${percentage}%,yellow 0% ${percentage}% )`;



}
window.addEventListener("scroll", scrollProgress);


backToTheTop.addEventListener('click', () => {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
});


// backToTheTop  //



let counters = document.querySelectorAll('.counter');
counters.forEach(counter => {

    let ending = counter.dataset.ending;
    let count = 0;
    let duration =  ending / 10000
    let counting = setInterval(()=>{
        count++;
        counter.innerHTML  = count

        if(count >= ending){
            clearInterval(counting)
        }

    }, duration)


})






//  dark MOde  //


let darkModeBtn = document.querySelector('.darkModeBtn');
const darkMode = () => {
    body.classList.toggle('darkMode')

}


darkModeBtn.addEventListener("click", darkMode);





//  dark MOde  //
