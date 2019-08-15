//result  == undefined
let result = alert("true")

//confirm modal //this returns a true or false value esc == false
 let adult = confirm("are u adult");
alert(adult);

//prompt testing, this returns a value given to text or null /esc == null
let askAge = prompt('How old are you?');
let age = (Number(askAge))?askAge:15;
alert(`you are ${age} years old`);