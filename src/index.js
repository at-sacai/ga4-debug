function getImg() {
	const img = document.getElementById('img');

	if (!img) {
		throw new Error("Element with id 'img' not found");
	}

	return img;
}

document.getElementById("button").addEventListener('click', () => {
  getImg();
});
