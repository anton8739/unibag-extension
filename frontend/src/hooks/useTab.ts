

import { useEffect, useState } from 'react';
export const useTab = () => {
    const [lastUrl, setLastUrl] = useState<any>();
    useEffect(() => {
        setLastUrl(window.location.toString())
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.message === 'url-updated') {
                    setLastUrl(request.url)
                }
            });
    }, [])

    return {
        lastUrl
    }
}





