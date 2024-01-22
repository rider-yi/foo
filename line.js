function addLineOverlay() {
  const elm = document.createElement("div");
  elm.setAttribute(
    "style",
    "position: fixed; z-index: 999999; padding: 0; margin: 0; right: 10px; bottom: 10px; height: 70px; width: 70px; background-color: rgba(0, 0, 0, 0); background-image: url(./line-icon.webp); background-size: cover; cursor: pointer;"
  );
  elm.onclick = () => window.open("https://www.fancs.com", "_blank");

  const body = document.getElementsByTagName("body").item(0);
  if (!body) {
    console.error("N-INE: body tag not found.");
    return;
  }
  body.appendChild(elm);
}

// スクリプトタグからパラメータを取得
const nineApiKey = document.currentScript.getAttribute("apiKey");
if (!nineApiKey) {
  console.log("The apiKey attribute is required.");
} else {
  console.log("apiKey:", nineApiKey);
  document.addEventListener("DOMContentLoaded", addLineOverlay);
}
