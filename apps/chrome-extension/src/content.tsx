import { getEmailFromStorage, setEmailToStorage } from "./storage";

async function contentScript() {
  const email = await getEmailFromStorage();
  if (email) {
    loadAppsScripts(email);
  }
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
    email = getEmailFromPrompt() as string;
    await setEmailToStorage(email);
  }

  // window.open(chrome.runtime.getURL(`index.html?email=${email}`));
  window.open(`http://localhost:3000?email=${email}`);
};

function getEmailFromPrompt() {
  return prompt("Type your email address:");
}

async function loadAppsScripts(email: string) {
  const response = await fetch("http://localhost:3000/api/installs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: email,
    },
  });
  const installs = await response.json();
  console.log({ installs });

  if (!installs?.length) {
    return;
  }

  for (const install of installs) {
    const script = document.createElement("script");
    script.src = `${install.script}?email=${email}`;
    script.id = "sidedish-app-script";
    document.body.appendChild(script);
  }
}

contentScript();
