function getImg() {
	const img = document.getElementById('img');

	if (!img) {
		throw new Error("Element with id 'img' not found");
	}

	return img;
}

document.addEventListener('DOMContentLoaded', () => {
	getImg();
});

window.addEventListener('load', () => {
  setTimeout(() => {
    throw new Error('GTM JS Error trigger test');
  }, 100);
});
