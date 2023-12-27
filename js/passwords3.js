let start = prompt("Кто там?");
alert(start);
if (start = null){
    alert('отменено');
} else if (start != "админ"){
    alert("я вас не знаю");
} else {
    alert('пароль?');
}