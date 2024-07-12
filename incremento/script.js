 let num = 0

 document.getElementById("aumentar").addEventListener("click",() => { 
    num++;
    document.getElementById("num").innerText = num;                           
 });
 
 document.getElementById("diminuir").addEventListener("click", () => {
    num--;
    document.getElementById("num").innerText = num;
 });

