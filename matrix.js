var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var chinese = "10101110101110101101";

chinese = chinese.split("");

var font_size = 13;
var columns = c.width/font_size;
var drops = [];

for(var x = 0; x < columns; x++)
	drops[x] = 1;

function draw()
{
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "#00FF41";
	ctx.font = font_size + "px arial";

	for(var i = 0; i < drops.length; i++)
	{
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		drops[i]++;
	}
}

setInterval(draw, 34);
