function background() {
  chrome.identity.getProfileUserInfo(async (userInfo) => {
    if (!userInfo.email) {
      return;
    }
    await chrome.storage.local.set({ email: userInfo.email });
    console.log("Email stored!", userInfo.email);
  });
}

background();
