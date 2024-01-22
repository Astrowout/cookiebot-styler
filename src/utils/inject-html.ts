const divEl = document.createElement("div");
document.body.appendChild(divEl);

export const injectHtml = (html: string) => {
    divEl.innerHTML = html;
};