function getImg() {
	const img = document.getElementById('img');

	if (!img) {
		throw new Error("img　is not found");
	}

	return img;
}

document.getElementById("button").addEventListener('click', () => {
  getImg();
});
