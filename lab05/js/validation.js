
function formValidation () {
    var uid = document.registform.userid; 
    var passid = document.registform.passid; 
    var uname = document.registform.username; 
    var uadd = document.registform.address; 
    var ucountry = document. registform.country; 
    var uzip = document. registform. zip; 
    var uemail = document. registform.email; 
    var usex = document. registform.sex;
    if (validateUserID (uid, 5, 12)) { 
        if (validatePassword (passid, 7, 12)) { 
            if (allLetter (uname)) { 
                if (alphanumeric (uadd)) { 
                    if (countryselect (ucountry)) { 
                        if (allnumeric (uzip)) { 
                            if (validateEmail (uemail)) {
                                if (validateGender(usex)) {}
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function validateUserID(uid,min,max) {
    var error = ""; 
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (uid.value == "") {
        uid.style.background = 'Yellow'; 
        error = "กรุณาป้อน  User ID\n"; 
        alert(error); 
        uid.focus();
        return false;

    } else if ((uid.value.length < min) || (uid.value.length > max)) {
        uid.style.background = 'Yellow'; 
        error = "User ID ต้องมีความยาว " + min + "-" + max + " ตัวอักษร\n"; 
        alert(error); 
        uid.focus();
        return false;

    } else if (illegalChars.test(uid.value)) {
        uid.style.background = 'Yellow'; 
        error = "User ID มีตัวอักษรที่ไม่ได้รับอนุญาต\n"; 
        alert(error);
        uid.focus(); 
        return false;

    } else {
        uid.style.background = 'White';
    }
    return true;
    }
    function validatePassword (passid,min,max) {
        var error = ""; 
        var illegalChars = /[\W_]/; // allow only letters and numbers
        
        if (passid.value == "") {
        passid.style.background = 'Yellow'; 
        error = "กรุณาป้อน Password\n"; 
        alert(error); 
        passid.focus();
        return false;

        } else if ((passid.value.length < 7) || (passid.value.length > 15)) {
        error = "Password ต้องมีความยาว "+min+"-"+max+" ตัวอักษร\n"; 
        passid.style.background = 'Yellow'; 
        alert(error);
        passid.focus(); 
        return false;
        
        } else if (illegalChars.test(passid.value)) {
        error = "Password มีตัวอัการที่ไม่ได้รับอนุญาต\n"; 
        passid.style.background = 'Yellow'; 
        alert(error);
        passid.focus(); 
        return false;

        } else if ((passid.value.search (/[a-zA-Z]+/) == -1) || (passid.value.search (/[0-9]+/) == -1)) {
        error = "Password ต้องมีตัวเลขอย่างน้อย 1 ตัว \n"; 
        passid.style.background = 'Yellow'; 
        alert(error);
        passid.focus(); 
        return false;

        } else {
        passid.style.background = 'White'; 
    }
        return true;
        }
        
