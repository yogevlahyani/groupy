export function getEmailFromStorage(): Promise<string> {
  return new Promise((resolve) => {
    chrome.storage.local.get("email", (data) => {
      resolve(data.email);
    });
  });
}

export function setEmailToStorage(email: string): Promise<string> {
  return new Promise((resolve) => {
    chrome.storage.local.set({ email }, () => {
      resolve(email);
    });
  });
}
