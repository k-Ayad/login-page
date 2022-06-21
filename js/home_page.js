
var msg = document.getElementById('msg');

usersList = [] ;
var storage = localStorage.getItem("usersList") ;

if (storage != null)
{
     usersList = JSON.parse(storage);
}

var index =JSON.parse( localStorage.getItem('userIndex'));

msg.innerHTML= `Welcome ${usersList[index].name}`;

