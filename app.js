const faqQues = document.querySelectorAll(".faq-ques");

faqQues.forEach((i) => {
	i.addEventListener("click", (e) => {
		if (!e.target.classList.contains("show-ans")) {
			faqQues.forEach((x) => {
				x.classList.remove("show-ans");
			});
			i.classList.add("show-ans");
		} else {
			i.classList.remove("show-ans");
		}
	});
});
