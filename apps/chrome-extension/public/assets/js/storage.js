function getEmailFromStorage() {
  return new Promise((resolve) => {
    chrome.storage.local.get("email", (data) => {
      resolve(data);
    });
  });
}

function setEmailToStorage(email) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ email }, () => {
      resolve();
    });
  });
}
