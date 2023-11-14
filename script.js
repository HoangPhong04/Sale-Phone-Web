const adress = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
// console.log (adress)
// ---------- đóng mở khung ------------
adress.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})
// ----------------form-DN-DK--------------------
function dangky(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        email : email,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
}
function dangnhap(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.setItem(username);
    var data = JSON.parse(user);
    if(user = null){
        alert("Vui lòng nhập username password")
    }
    else if(username == data.username && password == data.password){
        alert("Đăng nhập thành công")
        window.location.href="index.html"
    }
    else{
        alert("Đăng nhập thất bại")
    }
}
// --------------mở-form-------------------
const open = document.querySelector('#form-DN')
const close = document.querySelector('#closeform')
// console.log (adress)
// ---------- đóng mở khung ------------
open.addEventListener("click", function(){
    document.querySelector('.form-DN').style.display = "flex"
})
close.addEventListener("click", function(){
    document.querySelector('.form-DN').style.display = "none"
})
// ------------------slider ------------------
const rightrun = document.querySelector('.fa-angle-right')
const leftrun = document.querySelector('.fa-angle-left')
const img = document.querySelectorAll('.slider-content-left-top img')
// console.log(img.length)
let index = 0
rightrun.addEventListener("click", function(){
    index = index +1
    if(index>img.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftrun.addEventListener("click", function(){
    index = index -1
    if(index<=0){
        index = img.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
// ----------slider-buttom----------
const imgli = document.querySelectorAll('.slider-content-left-buttom li')
imgli.forEach(function(image,index){
    image.addEventListener("click",function(){  
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// ------slider2----------------
function imgauto() {
    index += 1
    if(index>img.length-1){
        index = 0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgli[index].classList.add("active")
    // console.log(index)
}
setInterval(imgauto,4000)
// ------------------slider-SP-------------
const rightruntwo = document.querySelector('.fa-angle-right-two')
const leftruntwo = document.querySelector('.fa-angle-left-two')
const imgtwo = document.querySelectorAll('.slider-product-content-items')
// console.log(rightruntwo)
// console.log(leftruntwo)
rightruntwo.addEventListener("click", function(){
    index = index +1
    if(index>imgtwo.length-1){
        index = 0
    }
    document.querySelector(".slider-product-content-items-content").style.right = index *100+"%"
})
leftruntwo.addEventListener("click", function(){
    index = index -1
    if(index<=0){
        index = imgtwo.length-1
    }
    document.querySelector(".slider-product-content-items-content").style.right = index *100+"%"
})