# web.skype.com for Firefox

[![Mozilla Add-on](https://img.shields.io/amo/v/firefox-web-skype.svg)][addon]
[![Mozilla Add-on](https://img.shields.io/amo/stars/firefox-web-skype.svg)][reviews]
[![Mozilla Add-on](https://img.shields.io/amo/users/firefox-web-skype.svg)][addon]

WebExtension for Mozilla Firefox.
With this extension you are able to open *Skype for Web* in Firefox.

Supported URLs:

* `https://web.skype.com/*`
* `https://preview.web.skype.com/*`
* `https://join.skype.com/*`

This extension sets Google Chrome's `userAgent` for the URLs above.
So now Skype believes that you are using Chrome browser and does not show "Unsupported browser" message.

There are requests from users came recently about "Oops, it looks like something went wrong" error message ([#7], [#8]).
In order to fix that there were added more URLs:

* `https://*.live.com/*`
* `https://*.live.net/*`
* `https://*.microsoft.com/*`
* `https://*.microsoftonline.com/*`
* `https://*.skype.com/*`
* `https://*.skypeassets.com/*`

:warning: This extension **does not fix** any issues related to WebRTC API, so video calls and other features may still not work on Firefox.

---

Shame on you Microsoft for throwing Firefox users away and actually enforcing Chrome's monopoly. :-1: :dizzy_face:

[addon]: https://addons.mozilla.org/firefox/addon/firefox-web-skype/
[reviews]: https://addons.mozilla.org/firefox/addon/firefox-web-skype/reviews/
[#7]: https://github.com/phts/firefox-web-skype/issues/7
[#8]: https://github.com/phts/firefox-web-skype/issues/8
