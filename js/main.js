var ITSPAWAN_QOUTES = [ "If at first you don't succeed; call it version 1.0",
				"There are 10 types of people in the world: those who understand binary, and those who don't.....Steve Jobs"
				,"Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while.....Steve Jobs"
				,"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.....Steve Jobs"
				,"It’s more fun to be a pirate than to join the navy....Steve Jobs"
				,"Be nice to nerds. Chances are you'll end up working for one.....Bill Gates"
				,"When something exceeds your ability to understand how it works, it sort of becomes magical....Jonathan Ive "
			];
$(document).ready(function(){
	$("header h4").text(ITSPAWAN_QOUTES[0])
	setInterval(function(){ 
		var index = Math.floor(Math.random() * ((ITSPAWAN_QOUTES.length-1) - 0) + 0);
		$("header h4").hide("slow"); 
		$("header h4").text(ITSPAWAN_QOUTES[index])
		$("header h4").show("slow");
	}, 6666);



	$("nav li.dropdown").hover(function(){
		$(this).find(".sub-hide").show();
	},function(){
		$(this).find(".sub-hide").hide();
	});

	$(".sub-hide li").hover(function(){
		$(this).find(".sub-sub-hide").show();
	},function(){
		$(this).find(".sub-sub-hide").hide();
	});



});
