const links = [];

[...document.querySelectorAll('h2')].forEach((el, i) => {

    el.id = `h2-${i}`;

    links.push(`<li><a href="#h2-${i}">${el.textContent}</a></li>`);
});

nav.innerHTML = links.join('');