function generateTodaysDate() {
	return fetch("https://workshop04-backend.vercel.app/date")
		.then((res) => res.json())
		.then((data) => {
			if (data.result === true) {
				document.querySelector("#date").textContent = data.today;
			}
		})
		.catch((e) => console.error(e));
}

generateTodaysDate();
