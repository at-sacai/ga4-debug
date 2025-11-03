function getImg() {
	const img = document.getElementById('img');

	if (!img) {
		throw new Error("Element with id 'img' not found");
		console.log("hoge")
		// const error = new Error("Element with id 'img' not found");
		// throw error;
	}

	return img;
}

document.addEventListener('DOMContentLoaded', () => {
	getImg();
});
