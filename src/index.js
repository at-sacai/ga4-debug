function getImg() {
	const img = document.getElementById('img');

	if (!img) {
		const error = new Error("Element with id 'img' not found");
		console.error(error);

		throw error;
	}

	return img;
}

document.addEventListener('DOMContentLoaded', () => {
	getImg();
});

// assets/index.js
// GTM が読み込まれた後に確実に走らせる
window.addEventListener('load', () => {
  // 100ms 遅延して「未捕捉例外」を発生させる
  setTimeout(() => {
    throw new Error('GTM JS Error trigger test');
  }, 100);
});
