
[<](README.md)

<img width="375" src="assets/img/banner-web-development.png">

# Advanced Web Development Environment

Web development environment for full-stack development.




## Install

So you're already familiar with a standard [web development environment](topics-development-environment.md)?

- NVM, NPM, Node.js
- [Homebrew](https://brew.sh/)
- [NVM/Node](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)
- SFTP (Secure File Transfer Protocol) clients make it easy to transfer files between computers using a GUI.
	- [Cyberduck](https://cyberduck.io/) or [FileZilla](https://filezilla-project.org/) (Windows, MacOS, Linux)
	- [remote-ftp](https://atom.io/packages/remote-ftp) - Enable browsing remote SFTP just like the built-in Tree View
- Databases
	- [TablePlus](https://tableplus.com/download)
- Productivity
	- [Rectangle](https://rectangleapp.com/)
	- [Notational Velocity](http://notational.net/)




## Browser extensions for web development

- [Markdown Viewer](https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk/related?hl=en) let's you preview `.md` files in your browser so you can work on your README files locally.
- [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US) will highlight and format JSON in the browser to help you analyze and work with it.
- [Adblock Plus](https://adblockplus.org/) will help you preserve your sanity (and maybe your privacy) while working online.











## Design patterns

### About

- Especially those appropriate to your environment
	- e.g. a singleton doesn't work well in web dev, and MVC does not work well in game dev.



### Logic Centralization

- A [design pattern](https://en.wikipedia.org/wiki/Logic_centralization_pattern) that encourages you to keep variables and logic in one place.
- Discourages redundant code, and helps to make sure variables don't change without good reason.
- Can be often fixed by clear S.O.L.I.D. principles and OOP.

Scenario: You have four different functions that can all change the login status of a user. Since you update this with several pieces of logic it is not only redundant and hard to maintain, but very difficult to debug.

Fix: Keep all logic that changes global variables in a central location.
