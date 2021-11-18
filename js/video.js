var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	// update volume info
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// volume slider
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Changing Slider")
	var slider = document.querySelector("#slider").value;
	video.volume = slider / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("Slower speed: " + video.playbackRate);
});

// quicken it up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("Faster speed: " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Video's current duration " + video.currentTime);
	if ((video.currentTime + 15) < video.duration) {
		video.currentTime += 15;
		console.log("Skip video to " + video.currentTime)
	}

	else if ((video.currentTime + 15) >= video.duration) {
		video.currentTime = 0;
		console.log("Go back to the start of the video");
	}
});

// mute + unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
});

//
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School Style");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original Style");
});

