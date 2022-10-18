document.onload = uwufy();

function uwufy() {
    window.document.querySelectorAll('a, p, h1, h2, h3, h4, h5, ltr, div, button').forEach((v, k) => {
        v.childNodes.forEach((n, k) => {
            if(n.nodeType == Node.TEXT_NODE)
            n.textContent = n.textContent.replace(/(r|l)/gi,"w");
        });
    });
}
