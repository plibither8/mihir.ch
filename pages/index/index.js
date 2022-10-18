// Lazy-load offscreen images
import "lazysizes";
import { render } from "timeago.js";

// Expand the "Psst! ++" button
// const psstButtonHandler = () => {
// 	const button = document.querySelector('#heading button.expand');
// 	button.addEventListener('click', () => {
// 		button.nextElementSibling.classList.remove('nodisplay');
// 		button.remove();
// 	});
// };

// Expand/collapse projects' "++" buttons
const projectButtonsHandler = () => {
  function toggleProjectVisibility(project, collapse) {
    const details = project.querySelector("div.details");
    const button = project.querySelector("button");
    // 0 -> Expand, 1 -> Collapse
    const action =
      collapse == null
        ? !project.classList.contains("card--collapsed")
        : collapse;
    if (action) {
      project.classList.add("card--collapsed");
      button.innerHTML = "++";
    } else {
      project.classList.remove("card--collapsed");
      button.innerHTML = "--";
    }
  }

  const projectCards = [...document.querySelectorAll("#projects .card")];

  // Parent button controlling all projects
  const projectsSection = document.querySelector("#projects");
  const projectsParentButton = projectsSection.querySelector(
    "button.parent-controller"
  );
  projectsParentButton.addEventListener("click", () => {
    const action = !projectsSection.classList.contains("--collapsed");
    projectsSection.classList.toggle("--collapsed");
    projectCards.map((project) => toggleProjectVisibility(project, action));
    projectsParentButton.innerHTML = action ? "++" : "--";
  });

  // Individual project card buttons
  for (const project of projectCards) {
    const button = project.querySelector("button");
    button.addEventListener("click", () => toggleProjectVisibility(project));
  }
};

// "Load more" button to load five more HN items
const hnMoreHandler = () => {
  const hnCard = document.querySelector("#hn");
  const moreButton = hnCard.querySelector("button");
  const allButton = hnCard.querySelector("button#load-all");

  let startIndex = 0;
  moreButton.addEventListener("click", () => {
    hnItems.slice(startIndex, startIndex + 5).map(createListItem);
    startIndex += 5;
  });

  allButton.addEventListener("click", () => {
    hnItems.slice(startIndex).map(createListItem);
    startIndex = hnItems.length;
  });
};

const createListItem = (item) => {
  const hnList = document.querySelector("#hn ol");
  const listEl = document.createElement("li");

  if (item.type === "comment") {
    listEl.innerHTML += `<div class="comment">${item.text}</div>`;
  } else {
    listEl.innerHTML += `<a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>`;
  }

  listEl.innerHTML += `<p class="sub">
		${item.date} &middot;&nbsp;
		<a href="https://news.ycombinator.com/item?id=${item.id}" target="_blank" rel="noopener">
			show on hn
		</a>
	</p>`;

  hnList.append(listEl);
};

const main = () => {
  // psstButtonHandler();
  projectButtonsHandler();
  hnMoreHandler();
  render(document.querySelector("a.update span")); // Render the "Last updated" timestamp
};

main();
