// $("h1").text("Bye");
// $("h1").addClass("big-title margin-50");

// $("button").html("<em>click</em>");
// $("a").attr("href","https://www.yahoo.com.tw");

// for(var i = 0;i < 5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function () {
//         document.querySelector("h1").style.color="purple";
//     });
// }

// $("button").click(function() {
//     $("h1").css("color","purple");
// });

// $("input").keydown(function (event) {
//     console.log(event.key);
// });

// $(document).keydown(function(event) {
//     $("h1").text(event.key);
// });

$("h1").on("mouseover",function() {
   $("h1").css("color","purple");
});

$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});