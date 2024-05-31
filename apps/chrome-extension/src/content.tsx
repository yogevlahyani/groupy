import { getEmailFromStorage, setEmailToStorage } from "./storage";

function contentScript() {
  const profileSection = document.querySelector('[aria-label="Profile"]');

  if (!profileSection) {
    return;
  }

  const link = profileSection.querySelector("a");
  const appStoreButton = link!.cloneNode(true) as HTMLAnchorElement;

  appStoreButton.href = "#";
  appStoreButton.querySelector("div")!.innerText = "App Store";
  appStoreButton.addEventListener("click", onAppStoreButtonClick);

  setTimeout(() => {
    profileSection.children[0].prepend(appStoreButton);
  }, 500);
}

const onAppStoreButtonClick = async () => {
    let email = await getEmailFromStorage();
  
    if (!email) {
      email = getEmailFromPrompt();
      await setEmailToStorage(email);
    }
  
    window.open(chrome.runtime.getURL(`index.html?email=${email}`));
  };
  
  function getEmailFromPrompt() {
    return prompt("Type your email address:");
  }

contentScript();
