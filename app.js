let sidebar = document.querySelector(".nav-items");
// let gotoTop = document.querySelector(".fa-arrow-up");

// /* When the user scrolls down 100px from the 
// top of the document, show the button */
// window.onscroll = () => scrollFunction();

// function scrollFunction () {
// 	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
// 		gotoTop.style.display = "block";
// 		console.log("show");
// 	} else {
// 		gotoTop.style.display = "none";
// 		console.log("hide");
// 	}
// }

// /* when the user clicks the arrow up, 
// scroll to the top of the document */
// gotoTop.addEventListener("click", () => {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// })

document.querySelector(".menu").addEventListener("click", () => {
	sidebar.classList.toggle("show");
	}
)

document.querySelector(".close-menu").addEventListener("click", () => {
	sidebar.classList.remove("show");
	}
)

// closes the sidebar when anywhere apart from the sidebar is clicked
document.addEventListener("click", (event) => {
	if (sidebar.classList.contains("show")) {
		if (!event.target.classList.contains("nav-items") && !event.target.classList.contains("menu")) {
			sidebar.classList.remove("show");
		}
	}
	}
)