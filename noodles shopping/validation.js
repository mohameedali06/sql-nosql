
//FOR FIRST NAME
let fnamenode=document.getElementById("fname");
let spannode1=document.getElementById("error1");
function validate1(){
    spannode1.innerHTML="";
    let fname=fnamenode.value;
    
    if(fname=='')
    {
    spannode1.innerHTML="This Field is required";
    fnamenode.style.border="3px solid red";
    return false;
    }
    else if(fname.includes(' '))
    {
    spannode1.innerHTML="Space is not allowed";
    fnamenode.style.border="3px solid dark red";
    return false;
    }
    else
    {
        fnamenode.style.border="3px solid green";
        return true;
    }
}
//FOR LAST NAME
let lnamenode=document.getElementById("lname");
let spannode2=document.getElementById("error2");
function validate2(){
    spannode2.innerHTML="";
    let lname=lnamenode.value;
    
    if(lname=='')
    {
    spannode2.innerHTML="This Field is required";
    lnamenode.style.border="3px solid red";
    return false;
    }
    else if(lname.includes(' '))
    {
    spannode2.innerHTML="Space not allowed";
    lnamenode.style.border="3px solid red";
    return false;
    }
    else
    {
        lnamenode.style.border="3px solid green";
        return true;
    }
}

//FOR PASSWORD VALIDATION
let passnode=document.getElementById("pass");
let spannode3=document.getElementById("error3");
function validate3(){
    spannode3.innerHTML="";
    let password=passnode.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    console.log(password);
    console.log(regExp.test(password));
    
    if(password==' ')
    {
    spannode3.innerHTML="This Field is required";
    passnode.style.border="3px solid red";
    return false;
    }
    else if(password.length<4 || password.length<6)
    {
    spannode3.innerHTML="Password should be 4 to 6 character long";
    passnode.style.border="3px solid red";
    return false;
    }

    else if(regExp.test(password)==false){
        spannode3.innerHTML="Password should be alphanumeric with special symbol";
        passnode.style.border="3px solid red";
        return false;
    }
    else
    {
        passnode.style.border="3px solid green";
        return true;
    }
}


//FOR CONFIRM PASSWORD VALIDATION
let c_passnode=document.getElementById("c_pass");
let spannode4=document.getElementById("error4");
function validate4(){
    spannode4.innerHTML="";
    let password=passnode.value;
    let c_password=c_passnode.value; 
    if(c_password=='')
    {
    spannode4.innerHTML="This Field is required";
    c_passnode.style.border="3px solid red";
    return false;
    }
    else if(c_password!=password)
    {
    spannode4.innerHTML="Password should match";
    c_passnode.style.border="3px solid dark red";
    return false;
    }

    else
    {
        c_passnode.style.border="3px solid green";
        return true;
    }
}


//FOR EMAIL VALIDATION

let emailnode=document.getElementById("mail");
let spannode5=document.getElementById("error5");
function validate5(){
    spannode5.innerHTML="";
    let emailid=emailnode.value;
    let subs=emailid.substring(emailid.indexOf('@')+1);
    
    if(emailid=='')
    {
    spannode5.innerHTML="This Field is required";
    emailnode.style.border="3px solid red";
    return false;
    }
    else if(!emailid.includes('@') || subs=='')
    {
    spannode5.innerHTML="Invalid EmailId";
    emailnode.style.border="3px solid red";
    return false;
    }
    else
    {
        emailnode.style.border="4px solid green";
        return true;
    }
}

//FOR AGE
let agenode=document.getElementById("age");
let spannode6=document.getElementById("error6");
function validate6(){
    spannode6.innerHTML="";
    let age=agenode.value;
    if(age==''){
    spannode6.innerHTML="This Field is Required";
    agenode.style.border="3px solid red"
    return false;
    }
    else if(age<0)
    {
        spannode6.innerHTML="Enter positive number";
        agenode.style.border="3px solid red";
        return false;
    }
    else if(age<18)
    {
     spannode6.innerHTML="Age should be greater than 18.";
    agenode.style.border="3px solid red";
    return false;
    }

    else
   {
    agenode.style.border="4px solid green";
    return true;
   }
}

//FOR MOBILE NUMBER VALIDATION   (patter="[0-9]{10}")
let phonenode=document.getElementById("phone");
let spannode7=document.getElementById("error7");
function validate7(){

    spannode7.innerHTML="";
    let phone=phonenode.value;
   // let var1=parseInt(phone);
    if(phone=='')
    {
        spannode7.innerHTML="This field is required";
        phonenode.style.border="3px solid red";
        return false;
    }

    else if(phone.length<10 || phone.length>10)
    {
        spannode7.innerHTML="Enter valid phone no.";
        phonenode.style.border="3px solid red";
        return false;

    }
    else if(phone.includes(' '))
    {
        spannode7.innerHTML="Enter valid phone no.";
        phonenode.style.border="3px solid red";
        return false;

    }
    else if(isNaN(phone))
    {
        spannode7.innerHTML="Enter 0-9 digits only";
        phonenode.style.border="3px solid red";
        return false;
    }
    
   
    else
    {
        phonenode.style.border="3px solid green";
        return true;
    }

}

//To validate form

function validateform(){
    let v1=validate1();  //Valid then return true else return false
    let v2=validate2();    //Valid then return true else return false
    let v3=validate3();     //Valid then return true else return false
    let v4=validate4();     //Valid then return true else return false
    let v5=validate5();      //Valid then return true else return false
    let v6=validate6();      //Valid then return true else return false
    let v7=validate7();       //Valid then return true else return false

    if(v1==true && v2==true && v3==true && v4==true && v5==true && v6==true && v7==true)
    //(or) if(v1&&v2&&v3&&v4&&v5&&v6&&v7)
    return true;
    else
    return false;

}




