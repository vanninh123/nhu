   
   var otp = Math.floor(Math.random() * 1000000);
      const getElementVal = (id) => {
      return document.getElementById(id);
};
      // Gắn sự kiện submit form để gửi OTP
        // Gửi OTP qua EmailJS
        function submitForm(e) {
        e.preventDefault();
        var templateParams = {
          form_name : "vanninh",
          to_name : "OTP",
          to_email: "vanninhb2@gmail.com",
          message: "Ma OTP cua ban la " + otp  // Hàm generateOTP() là hàm tự định nghĩa để tạo mã OTP
        };
   
        emailjs.send('service_bfjbmay','template_erjf6iy',templateParams)
          .then(function(response) {
            console.log('Email gửi thành công!', response);
            alert('OTP đã được gửi đến email của bạn!');
          }, function(error) {
            console.log('Lỗi khi gửi email:', error);
            alert('Có lỗi xảy ra khi gửi OTP!');
          });
        }

function getdata() {
    var username = getElementVal("otp")?.value;
    if(username==otp) 
    {
        alert('Đăng nhập thành công');
        window.location.href = "index.html";
    }
    else alert('Đăng nhập thất bại');
    }
          
        var Getotp = getElementVal("getotp");
        Getotp.addEventListener("click", submitForm);
        var signInBtn = getElementVal("signInBtn");
        signInBtn.addEventListener("click", getdata);