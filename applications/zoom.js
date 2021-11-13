/**
 * A set of custom commands that integrates serenade with zoom by programmatically triggering shortcuts.
 * The complete list of shortcuts is mapped to <key, modifiers> pairs that can be used with the serenade api.
 * See https://support.zoom.us/hc/en-us/articles/205683899-Hot-keys-and-keyboard-shortcuts for the complete list.
 */

const command = "command";
const option = "option";
const shift = "shift";
const control = "control";
const alt = "alt";

// --------------------- shortcut mappings ---------------------

// Zoom shortcuts
const zoomShortcuts = {
  // General
  closeCurrentWindow: ["w", [command]],
  switchPortaitLandscape: ["l", [command]],
  switchTab: ["t", [control]],
  // Meeting
  joinOrScheduleMeeting: ["j", [command]],
  startMeeting: ["v", [command, control]],
  directShare: ["s", [command, control]],
  muteUnmuteSelfAudio: ["a", [command, shift]],
  muteAllButHost: ["m", [command, control]],
  unmuteAllButHost: ["u", [command, control]],
  startStopVideo: ["v", [command, shift]],
  switchCamera: ["n", [command, shift]],
  startStopScreenShare: ["s", [command, shift]],
  pauseResumeScreenShare: ["t", [command, shift]],
  startLocalRecording: ["r", [command, shift]],
  startCloudRecording: ["c", [command, shift]],
  pauseResumeRecording: ["p", [command, shift]],
  switchSpeakerGalleryView: ["w", [command, shift]],
  previous25Gallery: ["p", [control]],
  next25Gallery: ["n", [control]],
  showHideParticipants: ["u", [command]],
  showHideChat: ["h", [command, shift]],
  openInviteWindow: ["i", [command]],
  raiseLowerHand: ["y", [option]],
  gainRemoteControl: ["r", [control, shift]],
  stopRemoteControl: ["g", [control, shift]],
  toggleFullScreen: ["f", [command, shift]],
  toggleMinimize: ["m", [command, shift]],
  enableDisableDualMonitors: ["d", [command, shift]],
  meetingControlsToggle: ["\\", [control]], // from settings
  promptEndLeaveMeeting: ["w", [command]],
  jumpToChat: ["k", [command]],
  screenshot: ["t", [command]],
};

// Unmute appears to be particularly difficult to say and have serenade understand it,
// but I don't want to force people to edit pronunciations to use these commands
const zoomCommandsToShortuts = {
  ["close window"]: zoomShortcuts.closeCurrentWindow,
  ["portrait view"]: zoomShortcuts.switchPortaitLandscape,
  ["landscape view"]: zoomShortcuts.switchPortaitLandscape,
  ["switch tab"]: zoomShortcuts.switchTab,
  ["join meeting"]: zoomShortcuts.joinOrScheduleMeeting,
  ["schedule meeting"]: zoomShortcuts.joinOrScheduleMeeting,
  ["start meeting"]: zoomShortcuts.startMeeting,
  ["direct share"]: zoomShortcuts.directShare,
  ["mute"]: zoomShortcuts.muteUnmuteSelfAudio,
  ["mute all"]: zoomShortcuts.muteAllButHost,
  ["audio all"]: zoomShortcuts.unmuteAllButHost,
  ["video"]: zoomShortcuts.startStopVideo,
  ["switch camera"]: zoomShortcuts.switchCamera,
  ["share"]: zoomShortcuts.startStopScreenShare,
  ["pause share"]: zoomShortcuts.pauseResumeScreenShare,
  ["resume share"]: zoomShortcuts.pauseResumeScreenShare,
  ["start local recording"]: zoomShortcuts.startLocalRecording,
  ["start cloud recording"]: zoomShortcuts.startCloudRecording,
  ["pause recording"]: zoomShortcuts.pauseResumeRecording,
  ["resume recording"]: zoomShortcuts.pauseResumeRecording,
  ["switch view"]: zoomShortcuts.switchSpeakerGalleryView,
  ["previous twenty five"]: zoomShortcuts.previous25Gallery,
  ["next twenty five"]: zoomShortcuts.next25Gallery,
  ["participants"]: zoomShortcuts.showHideParticipants,
  ["chat"]: zoomShortcuts.showHideChat,
  ["invite"]: zoomShortcuts.openInviteWindow,
  ["hand"]: zoomShortcuts.raiseLowerHand,
  ["gain remote"]: zoomShortcuts.gainRemoteControl,
  ["stop remote"]: zoomShortcuts.stopRemoteControl,
  ["fullscreen"]: zoomShortcuts.toggleFullScreen,
  ["minimize"]: zoomShortcuts.toggleMinimize,
  ["dual monitors"]: zoomShortcuts.enableDisableDualMonitors,
  ["toggle controls"]: zoomShortcuts.meetingControlsToggle,
  ["end"]: zoomShortcuts.promptEndLeaveMeeting,
  ["leave"]: zoomShortcuts.promptEndLeaveMeeting,
  ["chat jump"]: zoomShortcuts.jumpToChat,
  ["screenshot"]: zoomShortcuts.screenshot,
};

// Account for the shortcuts that differ entirely on Windows
if (process.platform === "win32") {
  // TODO: Someone who uses zoom on windows can fill any out
}

// --------------------- utility functions ---------------------

/**
 * Presses the specified shortcut.
 */
const press = async (shortcut, api) => {
  const [key, modifiers] = shortcut;
  await api.pressKey(key, modifiers);
};

/**
 * Runs the provided callback after the specified number of milliseconds.
 */
const runAfter = (callback, timeout) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      await callback();
      resolve();
    }, timeout);
  });
};

/**
 * Types some text after the specified number of milliseconds.
 */
const typeAfter = (text, timeout, api) => {
  return runAfter(async () => await api.typeText(text), timeout);
};

/**
 * Presses a shortcut after the specified number of milliseconds.
 */
const pressAfter = (shortcut, timeout, api) => {
  return runAfter(async () => await press(shortcut, api), timeout);
};

// --------------------- shortcut commands ---------------------

for (const [command, shortcut] of Object.entries(zoomCommandsToShortuts)) {
  serenade.app("zoom").command(command, async (api) => {
    await press(shortcut, api);
  });
}
