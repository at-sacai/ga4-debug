function getImg() {
	const img = document.getElementById('img');

	if (!img) {
		throw new Error("Element with id 'img' not found");
		// console.error(error);
	}

	return img;
}

document.addEventListener('DOMContentLoaded', () => {
	getImg();
});
