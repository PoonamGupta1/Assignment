function validateNumber(input) {
    // var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/
   
   var re = /^\d{10}$/;
  
    return re.test(input)
  }
  
//   validateNumber('1234567890')
  function validateForm(event) {
    var number = document.getElementById('phoneNo').value
    if (!validateNumber(number)) {
      alert('Please enter a valid number')
      const ele = document.getElementById('result')
      ele.innerHTML = 'Validation Failed'
      ele.style.color = 'red'
    } else {
      const ele = document.getElementById('result')
      ele.innerHTML = 'Validation Successful'
      ele.style.color = 'green'
    }
    event.preventDefault()
  }

  document.getElementById('myform').addEventListener('submit', validateForm)
  function check(){
    if(!document.getElementById('phoneNo').value ){
      alert("Please write your correct phone number");
    }else {
      let a = document.createElement("a");
      a.href = "project2.html";
      document.body.appendChild(a);
    }
  }

  const data = JSON.stringify({
    "phoneNumber": "+336124241xx",
    "from": "Verify",
    "template": "Your verification code is {{pin}}",
    "template_fr": "Votre code de vérification est {{pin}}",
    "template_de": "Ihr Bestätigungscode lautet {{pin}}",
    "template_es": "Tu código de verificación es {{pin}}",
    "template_it": "Il tuo codice di verifica è {{pin}}",
    "template_bg": "Вашият код за потвърждение е {{pin}}", 
    "ttl": 300,
    "maxAttempts": 5,
    "pinType": "numbers",
    "pinLength": 5,
    "otpCallbackUrl": "https://my-callback/receive-otp-status"
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.sms.cx/otp");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer REPLACE_ACCESS_TOKEN");
  
  xhr.send(data);