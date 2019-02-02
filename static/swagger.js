function onClickPrettify() {
  document.querySelectorAll(".example:not(.pretty)").forEach(element => {
    element.classList.add("pretty");
    element.innerHTML = JSON.stringify(
      JSON.parse(element.textContent),
      null,
      2
    );
  });
}

setTimeout(() => {
  for (let opBlock of document.querySelectorAll(".opblock-summary")) {
    opBlock.addEventListener(
      "click",
      () => setTimeout(onClickPrettify, 500),
      false
    );
  }

  onClickPrettify();
}, 1000);
