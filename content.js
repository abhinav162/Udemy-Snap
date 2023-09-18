// content.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.msg === "start") {
        const acc = document.querySelectorAll('div.ud-accordion-panel-toggler');

        if (acc.length > 0) {
            acc.forEach((ac) => {
                ac.click();
            });

            const cbs = document.querySelectorAll('.item-link > div > label');

            cbs.forEach((cb) => {
                cb.click();
            });

            const progress = document.querySelector('.progress--progress-btn--3q_tr').click();
            
            if (progress) {
                const certCheck = document.querySelector('div.popover-module--inner--Sbv-I > div > :last-child').innerHTML;

                if(certCheck.includes('Get certificate')) {
                    document.querySelector('div.popover-module--inner--Sbv-I > div > :last-child').click();
                }
                else {
                    const msg = document.querySelector('div.popover-module--inner--Sbv-I > div > :last-child').innerText;
                    alert(msg);
                }
            }

        } else {
            alert("Please Open Course Page!");
        }
    }
});
