document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("enableToggle");
    const toggle2 = document.getElementById("enableSoftMode");
    const statusText = document.getElementById("statusText");
    const statusText2 = document.getElementById("statusText2");
  
    // Load saved state
    browser.storage.local.get("enabled").then((result) => {
      const isEnabled = result.enabled ?? true; // Default: enabled
      toggle.checked = isEnabled;
      statusText.textContent = isEnabled ? "WoolBlock is ENABLED" : "WoolBlock is DISABLED";
    });
  
    // On toggle change
    toggle.addEventListener("change", () => {
      const isEnabled = toggle.checked;
      browser.storage.local.set({ enabled: isEnabled });
      statusText.textContent = isEnabled ? "WoolBlock is ENABLED" : "WoolBlock is DISABLED";
    });

    browser.storage.local.get("enabled2").then((result) => {
        const isEnabled = result.enabled2 ?? false; // Default: disabled
        toggle2.checked = isEnabled;
        statusText2.textContent = isEnabled ? "SoftMode is ENABLED" : "SoftMode is DISABLED";
    });
    toggle2.addEventListener("change", () => {
        const isEnabled = toggle2.checked;
        browser.storage.local.set({ enabled2: isEnabled });
        statusText2.textContent = isEnabled ? "SoftMode is ENABLED" : "HardMode is ENABLED";
    });
  });