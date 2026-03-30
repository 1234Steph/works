
         const bar = document.querySelector('#bar');
        const navbar = document.querySelector('.navbar');
        const closebar = document.querySelector('#close');
        bar.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
        closebar.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
        const links = document.querySelectorAll('.navbar ul li a');
            links.forEach(link =>{
                link.onclick = () => {navbar.classList.remove('active');};
            });
    