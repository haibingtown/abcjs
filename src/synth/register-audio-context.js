//    Copyright (C) 2019-2020 Paul Rosen (paul at paulrosen dot net)
//
//    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
//    documentation files (the "Software"), to deal in the Software without restriction, including without limitation
//    the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
//    to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
//    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
//    BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Call this when it is safe for the abcjs to produce sound. This is after the first user gesture on the page.
// If you call it with no parameters, then an AudioContext is created and stored.
// If you call it with a parameter, that is used as an already created AudioContext.

function registerAudioContext(ac) {
	if (!window.abcjsAudioContext) {
		if (!ac) {
			ac = window.AudioContext ||
				window.webkitAudioContext ||
				navigator.mozAudioContext ||
				navigator.msAudioContext;
			ac = new ac();
		}
		window.abcjsAudioContext = ac;
	}
	return window.abcjsAudioContext.state !== "suspended";
}

module.exports = registerAudioContext;
