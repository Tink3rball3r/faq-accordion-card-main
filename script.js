const accordionButtons = document.querySelectorAll('.accordion');

accordionButtons.forEach((accordion) => {
	accordion.onclick = function () {
		this.classList.toggle('is-open');
		this.classList.add('add-pad');
		let content = this.nextElementSibling;

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	};
});
