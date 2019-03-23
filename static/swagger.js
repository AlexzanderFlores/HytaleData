function fixDashboardLink() {
  document.querySelectorAll(".renderedMarkdown").forEach((element, index) => {
    let html = element.innerHTML;
    if (html.indexOf(" https://hytaledata.com/dashboard/api/") >= 0) {
      html = html.replace(/p>/g, "div>");
      console.log(html);
      element.innerHTML = html.replace(
        "https://hytaledata.com/dashboard/api/",
        `<a href='https://hytaledata.com/dashboard/api/' target='_blank' rel='noopener noreferrer'>https://hytaledata.com/dashboard/api/</a>`
      );
    }
  });
}

function onClickPrettify() {
  document.querySelectorAll(".example:not(.pretty)").forEach(element => {
    element.classList.add("pretty");
    element.innerHTML = JSON.stringify(
      JSON.parse(element.textContent),
      null,
      2
    );
    fixDashboardLink();
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
  fixDashboardLink();
}, 1000);
