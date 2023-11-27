// const closeformsignin= document.getElementById("close-sign-in");
// var formsignin = document.getElementById("form-2");
// const signin =document.getElementById("sign-in");
// signin.addEventListener("click", function showForm() {
//     formsignin.style.display = "flex"; 
// } );
// closeformsignin.addEventListener("click", function() {
//     formsignin.style.display = "none";
// });
// document.getElementById("sign-in-btn").addEventListener("click", function(event) {
//     // Ngăn chặn sự kiện mặc định của nút đăng ký
//     event.preventDefault();

//     // Lấy giá trị của trường Full Name
//     var fullName = document.getElementById("sign-in-name").value;
//     var phoneNumber = document.getElementById("sign-in-phone").value;
//     var password = document.getElementById("sign-in-password").value;
//     var confirmPassword = document.getElementById("sign-in-repassword").value;

//     // Lấy thẻ samp
//     var formMessageName = document.getElementById("form-message-name");
//     var formMessagePhone = document.getElementById("form-message-phone");
//     var formMessagePassword = document.getElementById("form-message-password");
//     var formMessageConfirmPassword = document.getElementById("form-message-password-confirm");

//     var isValid = true;
//     // Kiểm tra tên
//     if (fullName.trim() === "") {
//         formMessageName.innerText = "Chưa nhập tên";
//         formMessageName.style.display = "block";
//         isValid = false;
//     } else if (fullName.trim().length < 6 || /[!@#$%^&*(),.?":{}|<>]/.test(fullName) || !/^\S+$/.test(fullName)) {
//         formMessageName.innerText = "Tên phải có ít nhất 6 kí tự và không chứa kí tự đặc biệt và không có dấu cách";
//         formMessageName.style.display = "block";
//         isValid = false;
//     } else {
//         formMessageName.style.display = "none";
// }

//         // Kiểm tra số điện thoại
//     if (phoneNumber.trim() === "") {
//         formMessagePhone.innerText = "Chưa nhập số điện thoại";
//         formMessagePhone.style.display = "block";
//         isValid = false;
//     } else if (!/^\d{10}$/.test(phoneNumber)) {
//         formMessagePhone.innerText = "Số điện thoại không hợp lệ";
//         formMessagePhone.style.display = "block";
//         isValid = false;
//     } else {
//     formMessagePhone.style.display = "none";
//     }
//     // Kiểm tra mật khẩu
//     if (password.trim() === "") {
//         formMessagePassword.innerText = "Chưa nhập mật khẩu";
//         formMessagePassword.style.display = "block";
//         isValid = false;
//     } else if (!/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{6,}$/.test(password)) {
//     formMessagePassword.innerText = "Mật khẩu cần chứa ít nhất một ký tự đặc biệt và một số, và có ít nhất 6 ký tự";
//     formMessagePassword.style.display = "block";
//     isValid = false;
//     } else {
//         formMessagePassword.style.display = "none";
//     }
//     // Kiểm tra xác nhận mật khẩu
//     if (confirmPassword.trim() === "") {
//         formMessageConfirmPassword.innerText = "Chưa nhập mật khẩu xác nhận";
//         formMessageConfirmPassword.style.display = "block";
//         isValid = false;
//     } else if (confirmPassword !== password) {
//          formMessageConfirmPassword.innerText = "Mật khẩu xác nhận không khớp với mật khẩu đã nhập. Vui lòng nhập lại";
//         isValid =false;
//     }else{
//         formMessageConfirmPassword.innerText = "Xác thực thành công";
//         isValid=true;
//     }
// });
const signin =document.getElementById("form-DN");
const formsignin =document.getElementById("form-2")
const closesignin =document.getElementById("close-sign-in")
const signup =document.getElementById("sign-up")
const formsignup =document.getElementById("form-1");
const closesignup =document.getElementById("close-sign-up")


// ======================open============================
signin.addEventListener("click", function(){
    formsignin.style.display ="flex";
})
signup.addEventListener("click", function(){
    formsignin.style.display = "none";
    formsignup.style.display = "flex"
})

// ======================close============================
closesignin.addEventListener("click", function(){
    formsignin.style.display ="none";
})
closesignup.addEventListener("click", function(){
    formsignup.style.display = "none"
})

// =============================check Validi=================
// =============================check-Name=================
function validName(n){
    var nameRegex =/^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
    if(n.match(nameRegex) == null){
      return "Wrong";
    }
    else{
      return "Right";
    }
  }
// ==============================check-Email===================
function isEmailAddress(str) {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);  // returns a boolean 
 }
// ==============================check-Phone===================
 function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }
  function isPhone(str) {
    var pattern = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
    return pattern.test(str);  // returns a boolean 
 }
//  ====================Sin-in===========================
var fullName = document.getElementById("sign-in-name").value;
var formMessageName = document.getElementById("form-message-name");
function showErorr(){};


//  ====================Sin-up===========================
