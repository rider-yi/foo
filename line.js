function addLineOverlay(a8mat) {
  const elm = document.createElement("div");
  elm.setAttribute(
    "style",
    "position: fixed; z-index: 999999; padding: 0; margin: 0; right: 10px; bottom: 10px; height: 70px; width: 70px; background-color: rgba(0, 0, 0, 0); background-image: url(https://raw.githubusercontent.com/rider-yi/foo/main/line-icon.webp); background-size: cover; cursor: pointer;"
  );
  elm.onclick = () =>
    window.open(`https://www.fancs.com?a8mat=${a8mat}`, "_blank");

  const body = document.getElementsByTagName("body").item(0);
  if (!body) {
    console.error("N-INE: body tag not found.");
    return;
  }
  body.appendChild(elm);
}

// スクリプトタグからパラメータを取得
const a8mat = document.currentScript.getAttribute("a8mat");
if (!a8mat) {
  console.log("The a8mat attribute is required.");
} else {
  console.log("a8mat:", a8mat);
  document.addEventListener("DOMContentLoaded", () => addLineOverlay(a8mat));
}
