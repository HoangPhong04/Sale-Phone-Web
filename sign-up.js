
// // ==============================đăng kí==================== -->
// const closeformsignup= document.getElementById("close-sign-up")
// const formsignup = document.getElementById("form-1");
// function showForm() {
//     formsignup.style.display = "flex"; 
// }
// closeformsignup.addEventListener("click",function() {
//     formsignup.style.display = "none"; 
//     event.stopPropagation(); //Ngăn chặn sự kiện lan toả đến document

// }); 

//     document.getElementById("sign-up-btn").addEventListener("click", function(event) {
//         // Ngăn chặn sự kiện mặc định của nút đăng ký
//         event.preventDefault();
    
//         // Lấy giá trị của trường Full Name
//         var fullName = document.getElementById("sign-up-name").value;
//         var phoneNumber = document.getElementById("sign-up-phone").value;
//         var password = document.getElementById("sign-up-password").value;
//         var confirmPassword = document.getElementById("sign-up-repassword").value;
    
//         // Lấy thẻ samp
//         var formMessageName = document.getElementById("form-message-name");
//         var formMessagePhone = document.getElementById("form-message-phone");
//         var formMessagePassword = document.getElementById("form-message-password");
//         var formMessageConfirmPassword = document.getElementById("form-message-password-confirm");
    
//         var isValid = true;
    
//         // Kiểm tra tên
//         if (fullName.trim() === "") {
//             formMessageName.innerText = "Chưa nhập tên";
//             formMessageName.style.display = "block";
//             isValid = false;
//         } else if (fullName.trim().length < 6 || /[!@#$%^&*(),.?":{}|<>]/.test(fullName) || !/^\S+$/.test(fullName)) {
//             formMessageName.innerText = "Tên phải có ít nhất 6 kí tự và không chứa kí tự đặc biệt và không có dấu cách";
//             formMessageName.style.display = "block";
//             isValid = false;
//         } else {
//             formMessageName.style.display = "none";
//     }
    
//             // Kiểm tra số điện thoại
//         if (phoneNumber.trim() === "") {
//             formMessagePhone.innerText = "Chưa nhập số điện thoại";
//             formMessagePhone.style.display = "block";
//             isValid = false;
//         } else if (!/^\d{10}$/.test(phoneNumber)) {
//             formMessagePhone.innerText = "Số điện thoại không hợp lệ";
//             formMessagePhone.style.display = "block";
//             isValid = false;
//         } else {
//         formMessagePhone.style.display = "none";
//         }
//         // Kiểm tra mật khẩu
//         if (password.trim() === "") {
//             formMessagePassword.innerText = "Chưa nhập mật khẩu";
//             formMessagePassword.style.display = "block";
//             isValid = false;
//         } else if (!/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{6,}$/.test(password)) {
//         formMessagePassword.innerText = "Mật khẩu cần chứa ít nhất một ký tự đặc biệt và một số, và có ít nhất 6 ký tự";
//         formMessagePassword.style.display = "block";
//         isValid = false;
//         } else {
//             formMessagePassword.style.display = "none";
//         }
//         // Kiểm tra xác nhận mật khẩu
//         if (confirmPassword.trim() === "") {
//             formMessageConfirmPassword.innerText = "Chưa nhập mật khẩu xác nhận";
//             formMessageConfirmPassword.style.display = "block";
//             isValid = false;
//         } else if (confirmPassword !== password) {
//              formMessageConfirmPassword.innerText = "Mật khẩu xác nhận không khớp với mật khẩu đã nhập. Vui lòng nhập lại";
//             isValid =false;
//         }else{
//             formMessageConfirmPassword.innerText = "";
//             isValid=true;
//         }
//     });
//     const accounts = [
//         { id: 1, username: "user1", password: "pass1" },
//         { id: 2, username: "user2", password: "pass2" },
//         // ... thêm tài khoản khác nếu cần
//     ];
    
//     // Hàm kiểm tra đăng nhập
//     function checkLogin(username, password) {
//         // Lặp qua mảng accounts để kiểm tra từng tài khoản
//         for (let i = 0; i < accounts.length; i++) {
//             if (accounts[i].username === username && accounts[i].password === password) {
//                 return true; // Đăng nhập thành công
//             }
//         }
//         return false; // Đăng nhập thất bại
//     }
    
//     // Sử dụng hàm checkLogin
//     const inputUsername = "user1";
//     const inputPassword = "pass1";
    
//     if (checkLogin(inputUsername, inputPassword)) {
//         console.log("Đăng nhập thành công");
//     } else {
//         console.log("Tên đăng nhập hoặc mật khẩu không đúng");
//     }
    