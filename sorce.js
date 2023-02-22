var googleBtn = document.getElementById("googleBtn");
var input = 0
// add click event handler to button
googleBtn.addEventListener("click", () => {
window.mess = window.open("About:Blank");
run_website(mess)
});
function run_website(mess = window){
    mess.document.write("<title>click for more cookies</title>")
    mess.document.write("hello, world!!!");
    mess.document.write("<h1><button id='edit'>click for cookies!!!</button></h1>")
    var button = mess.document.getElementById("edit");
    button.addEventListener("click", ()=>{
        input++
        button.innerText =  "cookies: " + String(input)
    })
}
