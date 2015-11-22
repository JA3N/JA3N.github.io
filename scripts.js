
$(document).ready(function () {
	$( ".clickButton" ).click(function() {
		$( ".change" ).toggleClass("clicked")
	});
	
	$(".startButton").click(function(){

		setTimeout(function(){$(".startS").addClass("changeColor")},250);
		setTimeout(function(){$(".startT").addClass("changeColor")},500);
		setTimeout(function(){$(".startA").addClass("changeColor")},750);
		setTimeout(function(){$(".startR").addClass("changeColor")},1000);
		setTimeout(function(){$(".startTT").addClass("changeColor")},1250);
		$(this).delay(1250).fadeOut("slow");
		$("h1").addClass("started");
		$(".testCases").delay(2000).fadeIn("slow");
	});
	
	$( ".case1" ).click(function() {
		$(".folders a").removeClass("selected");
		$(".folders div > div").removeClass("selected");
		$( ".case1Folder" ).addClass("selected");
	});
	$( ".case2" ).click(function() {
		$(".folders a").removeClass("selected");
		$(".folders div > div").removeClass("selected");
		$( ".case2Folder" ).addClass("selected");
	});
	$( ".case3" ).click(function() {
		$(".folders a").removeClass("selected");
		$(".folders div > div").removeClass("selected");
		$( ".case3Folder" ).addClass("selected");
	});
	$( ".case4" ).click(function() {
		$(".folders a").removeClass("selected");
		$(".folders div > div").removeClass("selected");
		$( ".case4Folder" ).addClass("selected");
	});
	$( ".case5" ).click(function() {
		$(".folders a").removeClass("selected");
		$(".folders div > div").removeClass("selected");
		$( ".case5Folder" ).addClass("selected");
	});
	
	$( ".folder1" ).click(function() {
		$(".folders div > div").removeClass("selected");
		$( ".blueCircle" ).addClass("selected");
		$(".doc1").addClass("selected");
	});
	$( ".folder2" ).click(function() {
		$(".folders div > div").removeClass("selected");
		$( ".redCircle" ).addClass("selected");
		$(".doc2").addClass("selected");
	});
	$( ".folder3" ).click(function() {
		$(".folders div > div").removeClass("selected");
		$( ".greenCircle" ).addClass("selected");
		$(".doc3").addClass("selected");
	});
	$( ".folder4" ).click(function() {
		$(".folders div > div").removeClass("selected");
		$( ".purpleCircle" ).addClass("selected");
		$(".doc4").addClass("selected");
	});
	$( ".folder5" ).click(function() {
		$(".folders div > div").removeClass("selected");
		$( ".orangeCircle" ).addClass("selected");
		$(".doc5").addClass("selected");
	});
	
	
});