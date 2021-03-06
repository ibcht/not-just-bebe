// ==UserScript==
// @name        not just bébé
// @namespace   https://github.com/ibcht/not-just-bebe
// @match       https://*/*
// @grant       none
// @version     1.1
// @author      ibcht
// @description put a real name, not just bébé
// @downloadURL https://github.com/ibcht/not-just-bebe/raw/main/main.js
// @updateURL   https://github.com/ibcht/not-just-bebe/raw/main/main.js
// @grant        none
// ==/UserScript==

const name = 'Zorro';

const elts = ['p','h1','h2','h3','h4','a'];

elts.forEach(elt => {
  document.querySelectorAll(elt).forEach(e => {
    e.innerHTML = e.innerHTML
        .replaceAll(/(un |votre |le |)bébé/ig,name);
  })
})
