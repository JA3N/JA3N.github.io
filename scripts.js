
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
	
	$(".blueCircle.c1").click(function(){
		$(this).addClass("clicked");
		$(".doc1Front .desc1").removeClass("hide");
		blueCircleDone();
	});
	$(".blueCircle.c2").click(function(){
		$(this).addClass("clicked");
		$(".doc1Front .desc2").removeClass("hide");
		blueCircleDone();
	});
	$(".blueCircle.c3").click(function(){
		$(this).addClass("clicked");
		$(".doc1Front .desc3").removeClass("hide");
		blueCircleDone();
	});
	$(".doc1Desc a").click(function(){
		$(".doc1Front").toggleClass("hide");
		$(".doc1Back").toggleClass("hide");
	});
	
	function blueCircleDone(){
		if (!($(".doc1Front .desc1").hasClass("hide") || $(".doc1Front .desc2").hasClass("hide") || $(".doc1Front .desc3").hasClass("hide"))){
			$(".doc1Front .diagnosis").removeClass("hide");
			$(".doc1Desc a").removeClass("hide");
		}
	}
	
	$(".redCircle.c1").click(function(){
		$(this).addClass("clicked");
		$(".doc2Front .desc1").removeClass("hide");
		redCircleDone();
	});
	$(".redCircle.c2").click(function(){
		$(this).addClass("clicked");
		$(".doc2Front .desc2").removeClass("hide");
		redCircleDone();
	});
	$(".redCircle.c3").click(function(){
		$(this).addClass("clicked");
		$(".doc2Front .desc3").removeClass("hide");
		redCircleDone();
	});
	
	function redCircleDone(){
		if (!($(".doc2Front .desc1").hasClass("hide") || $(".doc2Front .desc2").hasClass("hide") || $(".doc2Front .desc3").hasClass("hide"))){
			$(".doc2Front .diagnosis").removeClass("hide");
		}
	}
});