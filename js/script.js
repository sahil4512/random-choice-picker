const tagsEl = document.getElementById("tags");
const textareaChoice = document.getElementById("textarea-choice");

textareaChoice.focus();

textareaChoice.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelector();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelector() {
  const times = 30;

  const interval = setInterval(() => {
    const RandomTag = randomtagPicker();

    highlightTag(RandomTag);

    setTimeout(() => {
      unHighlightTag(RandomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const RandomTag = randomtagPicker();
      highlightTag(RandomTag);
    }, 100);
  }, times * 100);
}

function randomtagPicker() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
