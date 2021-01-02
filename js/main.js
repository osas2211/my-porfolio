const active = document.querySelectorAll('#main-header a');
const aboutPhoto = document.querySelector('.about-photo');

function navBarSwitch() {
    for (let i=0; i < active.length; i++){
        active[i].addEventListener('click', ()=>{
            for (links of active){
                links.classList.remove('active');
            }
            active[i].classList.add('active')

        });
    };
};


function openSideMenu(){
    document.getElementById('mobile').style.width = '90%';
    document.getElementById('main').style.filter = 'blur(5px)';
    document.querySelector('#main-header .side-bar').style.display = 'none'
    
};

function closeSideMenu(){
    document.getElementById('mobile').style.width = '0';
    document.getElementById('main').style.filter = 'none';
    document.querySelector('#main-header .side-bar').style.display = 'block'
};

smoothScroll();
navBarSwitch();
