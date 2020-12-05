'use strict'

const TARGET_URLS = [
  'https://web.skype.com/*',
  'https://preview.web.skype.com/*',
  'https://join.skype.com/*',
  'https://edge.skype.com/*',
]
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'

function rewriteUserAgentHeader(e) {
  for (let header of e.requestHeaders) {
    if (header.name.toLowerCase() === 'user-agent') {
      header.value = USER_AGENT
    }
  }
  return {requestHeaders: e.requestHeaders}
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: TARGET_URLS},
  ['blocking', 'requestHeaders'])
