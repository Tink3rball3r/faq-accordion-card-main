const accBtn = document.querySelectorAll('.accordion');

for (let i = 0; i < accBtn.length; i++) {
	accBtn[i].addEventListener('click', function () {
		for (let j = 0; j < accBtn.length; j++) {
			accBtn[j].classList.remove('is-open');
			if (j !== i) {
				accBtn[j].nextElementSibling.style.maxHeight = null;
			}
		}
		this.classList.add('is-open');
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	});
}
