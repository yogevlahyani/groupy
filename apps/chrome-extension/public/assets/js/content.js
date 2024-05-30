function bootstrap() {
  const profileSection = document.querySelector('[aria-label="Profile"]');

  if (!profileSection) {
    return;
  }

  const link = profileSection.querySelector("a");
  const appStoreButton = link.cloneNode(true);

  appStoreButton.href = "#";
  appStoreButton.querySelector("div").innerText = "App Store";
  appStoreButton.addEventListener("click", onAppStoreButtonClick);

  // Set a timeout to ensure the button is added after everything is loaded, is can cause the sourcemaps to go crazy
  setTimeout(() => {
    profileSection.children[0].prepend(appStoreButton);
  }, 500);
}

const onAppStoreButtonClick = async () => {
  const result = await getEmailFromStorage();

  if (!result) {
    const email = getEmailFromPrompt();
    await setEmailToStorage(email);
  } else {
    alert(`Email already stored - ${result.email}`);
  }
};

function getEmailFromPrompt() {
  return prompt("Type your email address:");
}

bootstrap();