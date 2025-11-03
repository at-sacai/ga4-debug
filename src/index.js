function getImg() {
	const img = document.getElementById('img');

	if (!img) {
		const error = new Error("Element with id 'img' not found");
		// console.error(error);
		throw error;
	}
  console.log("hoge");
	return img;
}

document.addEventListener('DOMContentLoaded', () => {
	getImg();
});
