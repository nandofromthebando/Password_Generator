document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate");
  const passwordElement = document.getElementById("password");

  generateButton.addEventListener("click", () => {
    const password = generatePassword(); // Implement your password generation logic here
    passwordElement.textContent = password;

    // Store the generated password securely in Chrome Extension Storage
    chrome.storage.sync.set({ password }, function () {
      console.log("Password stored securely.");
    });
  });

  function generatePassword() {
    const chars = "qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ";
    const special_chars = "~!@#$%^&*()_+={[}]||?/>.,<";
    const nums = "1234567890";
    password = "";
    allChars = chars + special_chars + nums;
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;


  }
});
