const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

// function PageTransitions(){
//     //Button click active class
//     for(let i = 0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', () => {
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
//             this.className +='active-btn'
//         })
//     }
// }


function PageTransitions () {

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });


    document.querySelector(".theme-btn").addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

    })

    // Sections Active
    allSections.addEventListener('click', (ev) => {
        const id = ev.taget.dataset.id;
        if(id){
            //remove 'active' class from the other buttons
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            //add 'active' class to section with the id targeted by event listener
            ev.target.classList.add('active')
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle theme
    const themeBtn = document.querySelectorAll('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
};

PageTransitions();