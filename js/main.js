var signupLink = document.getElementById('signup-link');
var userMailInp = document.getElementById('userMail');
var userPassInp = document.getElementById('userPass'); 
var loginBtn = document.getElementById('loginBtn');
var alarmSpan = document.getElementById('alarm-text'); 

var usersList = [];

var storage = localStorage.getItem("usersList") ;

if (storage != null)
{
     usersList = JSON.parse(storage);
}


signupLink.addEventListener('click' , function(){
    window.open("signup.html" , "_self");
});



loginBtn.addEventListener('click' , function (){
    if (userMailInp.value.length != 0 || userPassInp.value.length != 0 ){
        var flag = false ;
        for(var i =0 ; i<usersList.length ; i++){
            if(userMailInp.value == usersList[i].email && userPassInp.value == usersList[i].pass){
                window.open("home.html" , "_self"); // sending data to the home page ..
                localStorage.setItem('userIndex' , `${i}`)
                flag = true ;
                break ;
            }
        }

        if(flag == false){
            alarmSpan.innerHTML = "incorrect email or password ! ";
        }


    }else
    {
        if(alarmSpan.classList.contains('text-success')){
            alarmSpan.classList.replace('text-success' , 'text-danger');
        }
        alarmSpan.innerHTML = "All inputs required ! ";
    }
   
});


