const counter = () => { 
    const count = document.getElementById("timer"); 
 
    if (count.textContent == 0) { 
        return clearInterval(alert ("Вы победили в конкурсе!"));
    }; 
 
    count.textContent -= 1; 
} 
 
const timer = setInterval(() => { 
    counter(); 
}, 1000);