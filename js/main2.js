
let username = prompt("Кто там ?");
alert(username);
if (username == null ) {
    alert ("Отменено");
}else if  (username != "admin"){
    alert("я вас не знаю");
}else { 
    let paswords = prompt("пароль?");
    if (paswords === null){
        alert('отмена');
    } else if (paswords != 'Я Главный'){
        alert (paswords);
    } else {
        alert ("Здраствуйте");
    }
    
} 
