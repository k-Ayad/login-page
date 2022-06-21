var signinLink =document.getElementById('signin-link');
var signupBtn = document.getElementById('signUpBtn');

var userNameInp = document.getElementById('userName');   
var userMailInp = document.getElementById('userMail');
var userPassInp = document.getElementById('userpass'); 
var alarmSpan = document.getElementById('alarm-text'); 


var usersList = [];

var storage = localStorage.getItem("usersList") ;

if (storage != null)
{
     usersList = JSON.parse(storage);
}

signinLink.addEventListener('click' , function(){
    window.open("index.html" , "_self");
});

signupBtn.addEventListener('click' , function(){
    if (userNameInp.value.length  != 0 || userMailInp.value.length != 0 || userPassInp.value.length != 0){
        var inpObj = {
            name : userNameInp.value ,
            email : userMailInp.value ,
            pass : userPassInp.value 
        };
    
        usersList.push(inpObj);
    
        localStorage.setItem('usersList' ,JSON.stringify(usersList));
    
        clearInp() ;
        
        if(alarmSpan.classList.contains('text-danger')){
            alarmSpan.classList.replace('text-danger' , 'text-success');
        }
        alarmSpan.innerHTML = "Success";

    }else
    {
        if(alarmSpan.classList.contains('text-success')){
            alarmSpan.classList.replace('text-success' , 'text-danger');
        }
        alarmSpan.innerHTML = "All inputs required ! ";
    }
   
});


function clearInp (){
    userNameInp.value = '' ;
    userMailInp.value = '' ;
    userPassInp.value = '' ;
}