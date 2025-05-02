const adSelectors = [
    'iframe[src*="ad"]',
    '.adsbygoogle',
    '.adunit',
    '.ad-banner',
    '.sponsor',
    '.ad-frame',
    '.promo',
    '.modal-ad',
    'div[class*="ad"]',
    '[class*="banner"]',
    '[id*="ad"]',
    '[id*="ads"]',
    'div[data-ad]',
    '.google-auto-placed',
    '.js-ad',
    '.img_ad',
    '#ad_iframe',
    '.adsbygoogle.adsbygoogle-noablate',
    '.billboard-container.watermark',
    'dialog-widget.dialog-lightbox-widget.dialog-type-buttons.dialog-type-lightbox.elementor-popup-modal',
    'div[id^="ad_"]',
    'div[class^="ad-"]',
    'aside[class*="ad"]',
    'section[class*="sponsor"]',
    'a[href*="sponsored"]'
];


function greet() {
    console.log("Wool ADBlock Loaded!\nTime to pull the wool over these AD's eyes!");
    console.log(`Wool ADBlock running on: ${window.location.href}`);
}
greet();

// Run blocking logic based on settings
browser.storage.local.get(["enabled", "enabled2"]).then((result) => {
    const isEnabled = result.enabled ?? true;    // WoolBlock checkbox
    const softMode = result.enabled2 ?? false;   // SoftMode checkbox
    function blockAds() {
        adSelectors.forEach(selector => {
            // If softMode is on, do something lighter like hiding instead of removing
            document.querySelectorAll(selector).forEach(el => {
                if (softMode) {
                    el.style.display = "none";
                } else {
                    el.remove();
                }
            });
        });
    }
    if (isEnabled) {
        document.addEventListener('DOMContentLoaded', () => {
            blockAds();
        });

        setInterval(blockAds, 20);
    }
});
