# Password Generator Chrome Extension

## Overview

The Password Generator Chrome Extension is a simple tool that allows users to generate strong and random passwords directly from their browser. It also securely stores the generated passwords using Chrome Extension Storage.

## Features

- Password generation with a mix of:
  - Lowercase letters (a-z)
  - Uppercase letters (A-Z)
  - Special characters (~!@#$%^&*()_+={[}]||?/>.,<)
  - Numbers (0-9)
- Adjustable password length.
- Secure storage of generated passwords using Chrome Extension Storage API.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome.
3. Go to `chrome://extensions/`.
4. Enable "Developer mode" in the upper-right corner.
5. Click "Load unpacked" and select the directory where the extension is located.

## Usage

1. After installing the extension, you will see a new icon in the Chrome toolbar.
2. Click the extension icon to open the popup.
3. Click the "Generate Password" button to generate a strong password.
4. The generated password will be displayed in the popup.
5. The password is automatically stored securely using Chrome Extension Storage.

## Customization

You can customize the password length by modifying the `generatePassword` function in the `popup.js` file. Adjust the `length` parameter to change the length of generated passwords.


## Acknowledgments

- The password generation logic in this extension is based on [JavaScript password generator example](https://stackoverflow.com/a/18234317) by [Fibo Kowalski](https://stackoverflow.com/users/248797/fibo-kowalski) on Stack Overflow.

## Author

Anand Lessard


