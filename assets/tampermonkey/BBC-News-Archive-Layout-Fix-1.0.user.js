// ==UserScript==
// @name         BBC News Archive Layout Fix
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  Forces page width, manages image visibility, and scales up the main body text size.
// @author       User
// @match        http://*.bbc.co.uk/*/*.stm
// @match        https://*.bbc.co.uk/*/*.stm
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // List of images you want to HIDE completely
    const imagesToHide = [
        '/furniture/nav/global_navigation_bar.gif',
        '/furniture/nav/sub_navigation_bar.gif'
    ];

    // List of images you want to RESIZE to 100%
    const banners = [
        '/furniture/nav/global_navigation_bar.gif',
        '/furniture/banners/default_banner.gif',
        '/furniture/banners/banner_uk.gif'
    ];

    // 1. Loop through the hide array to handle multiple hidden images directly
    imagesToHide.forEach(src => {
        const img = document.querySelector(`img[src="${src}"]`);
        if (img) {
            img.style.setProperty('display', 'none', 'important');
        }
    });

    // 2. Resize the other targeted banners
    banners.forEach(src => {
        const img = document.querySelector(`img[src="${src}"]`);
        if (img) {
            img.style.setProperty('width', '100%', 'important');
        }
    });

    // 3. Main content table layout fix
    const mainTable = document.querySelector('table[width="600"]') || document.querySelector('body > table');

    if (mainTable) {
        mainTable.removeAttribute('width');
        mainTable.style.setProperty('width', '100%', 'important');
        mainTable.style.setProperty('max-width', '1200px', 'important');
        mainTable.style.setProperty('margin', '0 auto', 'important');

        const cells = mainTable.querySelectorAll('td');
        cells.forEach(cell => {
            cell.removeAttribute('width');
            cell.style.setProperty('width', 'auto', 'important');

            // 4. Scale up the main text size inside the content cells
            // Target font tags, paragraphs, and list items to make them readable on modern monitors
            const textElements = cell.querySelectorAll('font, p, li, b');
            textElements.forEach(text => {
                text.removeAttribute('size'); // Clear legacy HTML font sizes
                text.style.setProperty('font-size', '16px', 'important');
                text.style.setProperty('line-height', '1.5', 'important'); // Improves readability between lines
            });
        });
    }
})();
