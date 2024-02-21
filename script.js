//Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Background
ctx.fillStyle = "rgb(21, 30, 59)";
ctx.fillRect(0, 0, 600, 500);

ctx.fillStyle = "rgb(26, 37, 71)";
ctx.beginPath();
ctx.arc(150, 100, 290, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "rgb(29, 41, 79)";
ctx.beginPath();
ctx.arc(150, 100, 200, 0, 2 * Math.PI);
ctx.fill();

//Moon
ctx.fillStyle = "rgb(243, 245, 166)";
ctx.beginPath();
ctx.arc(150, 100, 90, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "rgb(29, 41, 79)";
ctx.beginPath();
ctx.arc(180, 80, 70, 0, 2 * Math.PI);
ctx.fill();

//Cloud 1
ctx.fillStyle = "rgb(220, 225, 245)";
ctx.beginPath();
ctx.arc(80, 225, 60, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 255, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(175, 245, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(230, 225, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(210, 210, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(140, 200, 60, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(170, 210, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(80, 210, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 220, 50, 0, 2 * Math.PI);
ctx.fill();

//Cloud 2
ctx.fillStyle = "rgb(220, 225, 245)";
ctx.beginPath();
ctx.arc(370, 295, 60, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(410, 325, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(465, 315, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(520, 295, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(470, 295, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(430, 255, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(480, 270, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(370, 280, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(410, 300, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(520, 280, 40, 0, 2 * Math.PI);
ctx.fill();

//Stars
ctx.fillStyle = "rgb(243, 245, 166)";
ctx.fillRect(330, 220, 3, 3);
ctx.fillRect(40, 360, 3, 3);
ctx.fillRect(370, 170, 3, 3);
ctx.fillRect(500, 370, 3, 3);
ctx.fillRect(550, 40, 3, 3);
ctx.fillRect(278, 98, 3, 3);
ctx.fillRect(33, 80, 3, 3);
ctx.fillRect(519, 126, 3, 3);
ctx.fillRect(547, 207, 3, 3);
ctx.fillRect(585, 290, 3, 3);
ctx.fillRect(302, 153, 3, 3);
ctx.fillRect(390, 385, 3, 3);
ctx.fillRect(573, 122, 3, 3);
ctx.fillRect(213, 354, 3, 3);
ctx.fillRect(13, 281, 3, 3);
ctx.fillRect(33, 178, 3, 3);
ctx.fillRect(325, 50, 3, 3);
ctx.fillRect(48, 24, 3, 3);
ctx.fillRect(149, 380, 3, 3);
ctx.fillRect(277, 300, 3, 3);
ctx.fillRect(468, 19, 3, 3);
ctx.fillRect(572, 382, 3, 3);
ctx.fillRect(450, 89, 3, 3);
ctx.fillRect(460, 169, 3, 3);
ctx.fillRect(309, 348, 3, 3);
ctx.fillRect(123, 326, 3, 3);
ctx.fillRect(250, 29, 3, 3);
ctx.fillRect(402, 10, 3, 3);
ctx.fillRect(149, 111, 3, 3);
ctx.fillRect(124, 65, 3, 3);
ctx.fillRect(248, 167, 3, 3);
ctx.fillRect(207, 130, 3, 3);
ctx.fillRect(194, 67, 3, 3);
ctx.fillRect(260, 395, 3, 3);
ctx.fillRect(380, 107, 3, 3);

//Text
ctx.font = "10px Arial";
ctx.fillStyle = "rgb(70, 82, 121)";
ctx.fillText("Jenaya F", 560, 398);
