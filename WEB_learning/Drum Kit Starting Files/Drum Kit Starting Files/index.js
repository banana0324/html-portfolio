
// document.querySelector(".set").addEventListener("click",function (){
//     alert("I got click！")
// });

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        alert("I got click！");
    });
}