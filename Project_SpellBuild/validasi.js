function validationForm(){
    var fullName = document.getElementById("tfFullName").value;
    var email = document.getElementById("tfEmail").value;
    var username = document.getElementById("tfUsername").value;
    var password = document.getElementById("tfPassword").value;
    var confirmPassword = document.getElementById("tfConfirmPassword").value;
    var gender = document.getElementsByName("gender");
    var qty = document.getElementById("tfQuantity").value;
    var address = document.getElementById("tfAddress").value;
    var agree = document.getElementsByName("cbAgree");
    var eM = document.getElementById("errMsg");
    
    
    if(fullName == ""){ //full name field Must be filled
        eM.innerHTML = "Full name field must be filled"
    }else if(letterOnly(fullName) == false){ //full name field Must consist of letters only
        eM.innerHTML = "Full name field must consist of letter only"
    }else if(email == ""){ // email field Must be filled
        eM.innerHTML = "Email field must be filled";
    }else if((!email.includes('.')) || (!email.includes('@'))){ // email field Must contain ‘@’ and ‘.’
        eM.innerHTML = "Email must contains '.' and '@' (Invalid Email)";
    }else if(email.indexOf('@') == (email.indexOf('.')-1) || email.indexOf('.') == (email.indexOf('@')-1)){ // email field ‘@’ and ‘.’ cannot be side by side
        eM.innerHTML = "'@' and '.' cannot be side by side (Invalid Email)";
    }else if(validEmail(email) == false){ // email field Must not contain symbols others than ‘@’ and ‘.’
        eM.innerHTML = "Email field must not contain symbols others than '@'' and '.' (Invalid Email)";
    }else if(username == ""){
        eM.innerHTML = "Username field must be filled";
    }else if(username.length <= 6){ // username Length must be greater than 6 characters
        eM.innerHTML = "Username length must be greater than 6 characters";
    }else if(checkSpace(username) == false){ // username Cannot contain space character (' ')
        eM.innerHTML = "Username cannot contain space character (' ')";
    }else if(password == ""){
        eM.innerHTML = "Password field must be filled";
    }else if(password.length <= 8){ // password Length must be greater than 8 characters
        eM.innerHTML = "Password length must be greater than 8 characters";
    }else if(alphaNumeric(password) == false){ // password field Must be alphanumeric (contain letter and digit)
        eM.innerHTML = "Password must be alphanumeric (contain letter and digit)";
    }else if(confirmPassword == ""){
        eM.innerHTML = "Confirm Password field must be filled";
    }else if(confirmPassword != password){ //confirm password field Must be the same with password
        eM.innerHTML = "Confirm Password field must be the same with password";
    }else if(gender[0].checked == false && gender[1].checked == false){ //gender field Must be chosen
        eM.innerHTML = "Gender must be chosen";
    }else if(qty == "0"){ // quantity field	Must be greater than 0
        eM.innerHTML = "Quantity Field must be greater than 0"; 
    }else if(address == ""){ 
        eM.innerHTML = "Address field must be filled";
    }else if(!(address.endsWith(" Street"))){ // address field Must ends with ' Street' (case sensitive)
        eM.innerHTML = "Address ends with ' Street' (case sensitive)";
    }else if(agree[0].checked == false){ // agree checkbox Must be checked
        eM.innerHTML = "The Agreement must be checked";
    }else{ //success validation
        alert("We will Process your Account!");
        document.getElementById("btnReset").click();
        eM.innerHTML = " ";
    }
}

//function to check letter only in fullname field
function letterOnly(fullName){
    var a = 0;
    for(var i = 0; i < fullName.length; i++){
        if((fullName.charCodeAt(i) < 65 || fullName.charCodeAt(i) > 90) && (fullName.charCodeAt(i) < 97 || fullName.charCodeAt(i) > 122)) a++;
    }			
    if(a == 0){
        return true;
    }else{
        return false;
    }  
}

//function to check special character just '@' and '.' for email field
function validEmail(email){
    var a = 0;
    var sc = 0;
    for(var i = 0; i < email.length; i++){
        if((email.charCodeAt(i) < 65 || email.charCodeAt(i) > 90) && (email.charCodeAt(i) < 97 || email.charCodeAt(i) > 122) && (email.charCodeAt(i) < 48 || email.charCodeAt(i) > 57)) a++;
        if(email.charCodeAt(i) == 64 || email.charCodeAt(i) == 46) sc++;
    }
    var c = a-sc;
    if(c == 0 && sc >= 2){
        return true;
    }else{
        return false;
    }
}

//function to check space for username field
function checkSpace(username){
    var sp = 0;
    for(var i = 0; i < username.length; i++){
        if(username.charCodeAt(i) == 32) sp++;
    }
    if(sp == 0){
        return true;
    }else{
        return false;
    }
}

//function to check alphanumeric for password field
function alphaNumeric(password){
    var alpha = 0;
    var num = 0;
    for(var i = 0; i < password.length; i++){
        var ps = +password.charCodeAt(i);
        if(ps >= 65 && ps <= 90) alpha++;
        if(ps >= 97 && ps <= 122) alpha++;
        if(ps >= 48 && ps <= 57) num++;
    }
    if(alpha == 0 || num == 0){
        return false;
    }else{
        return true;
    }
}