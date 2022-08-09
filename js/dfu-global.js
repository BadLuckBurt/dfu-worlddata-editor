function saveFile(text, fileName) {
	let c = document.createElement("a");
	c.download = fileName;

	let t = new Blob([text], {
		type: "text/plain"
	});
	c.href = window.URL.createObjectURL(t);
	c.click();
}