//jsarray03.js
var cnt = 0;
var posArray = [49, 50, 48, 51, 52];
var cntStep = 1;
var cntMin = 0;
var cntMax = 9;
var textWarning = "\n";


window.onload = function () {
	function clickCount() {
		var btn = this.textContent;
		if (btn == "Back") {
			cnt -= cntStep;
		}
		if (btn == "Next") {
			cnt += cntStep;
		}
		if (btn == "Reset") {
			cnt = cntMin;
		}
		if (btn == "Set Max") {
			cnt = cntMax;
		}
		if (cnt < cntMin) {
			cnt = cntMin;
			textWarning = "Warning!Reached the lower limit of array!";
			alert(textWarning);
		}
		if (cnt > cntMax) {
			cnt = cntMax;
			textWarning = "Warning!Reached the upper limit of array!";
			alert(textWarning);
		}
		result.textContent = "Button: " + btn;
		resultCnt.textContent = "cnt: " + cnt;
		resultItem.textContent = "posArray[" + cnt + "]= " + posArray[cnt];
		console.log("btn=" + btn + "\ncnt= " + cnt);
		return false;
	}
	var result = document.getElementById("result");
	var resultCnt = document.getElementById("resultCnt");
	resultCnt.textContent = "cnt: " + cnt;
	var resultItem = document.getElementById("resultItem");
	resultItem.textContent = "posArray[" + cnt + "]= " + posArray[cnt];
	var col = document.getElementsByClassName("btnCount");
	for (var i = 0; n = col.length, i < n; ++i) {
		col[i].onclick = clickCount;
		result.textContent = result.textContent + " " + "i";
    }
}
