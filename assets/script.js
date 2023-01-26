// Assignment code here
function getpassword() {

    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = 35;
    var password="";
      
      for (let i = 0; i<passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber +1);
       
     }
    return password;
    }
    
    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    
    function writePassword() {
     
        var password = getpassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      
      }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    