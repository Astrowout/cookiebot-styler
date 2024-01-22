const styleEl = document.createElement("style");
document.head.appendChild(styleEl);

export const replaceStyles = (css: string) => {
    styleEl.innerText = css;
};