const path = "/users/download/index.html"

const isHtml = path => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);

  return pathExt == requiredExt
}

console.log(isHtml(path))


/*const openButton = document.querySelector("#openOverlay");
const successModal = createModal("");
const body = document.body;

openButton.addEventListener("click", e => {
  body.appendChild(successModal);
})

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");

  overlayElement.innerHTML = template.innerHTML;
  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  })

  const closeElement = overlayElement.querySelector(".fullscreen-menu__close");
  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })

  return overlayElement;
}*/

/*document.getElementById('openOverlay').onclick = function() {
  document.getElementById('overlayTemplate').classList.add('open');
}

document.getElementById('close').onclick = function() {
  document.getElementById('overlayTemplate').classList.remove('open');
}*/
