function login(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
  
    // console.log(email.value);
    var email2 = localStorage.getItem('email')
    var password2 = localStorage.getItem('password')
    console.log(email2);
    if(email.value == email2 && password.value == password2){
      window.location='file:///C:/Users/Lenovo/OneDrive/Desktop/tugas%20reza/local%20storage/dashboard.html'
      sessionStorage.setItem('name',username)
    } else {
      alert("login gagal")
    }
    
  }
  
  function register(){
    console.log("");
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var gender = document.getElementById("gender")
  // console.log(username);
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('gender', gender.value)
    window.location='file:///C:/Users/Lenovo/OneDrive/Desktop/tugas%20reza/local%20storage/login.html'
  }
  
  var nama = sessionStorage.getItem("name")
  // console.log(nama);
  if (nama){
    document.getElementById("nama").innerText = username;
  }
  