let close_btn = document.getElementById("close_mobNav");
let mobnav_openBtn = document.getElementById("open_mobNav"); 
let mob_nav = document.getElementById("mobileNav");

close_btn.addEventListener('click', ()=>{
    mob_nav.style.display = 'none';
});
mobnav_openBtn.addEventListener('click', ()=>{
    mob_nav.style.display = 'block';
});