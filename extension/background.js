
chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {

        if (changeInfo.url) {
            chrome.tabs.sendMessage( tabId, {
                message: 'url-updated',
                url: changeInfo.url
            })
        }
    }
);
chrome.action.onClicked.addListener(
    function(tab) {
        chrome.tabs.sendMessage( tab.id, {
            message: 'open-app',
        })
    }
);