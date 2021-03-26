/**
 * A set of custom commands that integrates serenade with slack by programmatically triggering shortcuts.
 * The complete list of shortcuts is mapped to <key, modifiers> pairs that can be used with the serenade api.
 * See https://slack.com/help/articles/201374536-Slack-keyboard-shortcuts for the complete list.
 */

 const platform = process.platform;
 let cmd = "command";
 let option = "option";
 const shift = "shift";
 const control = "control";
 const tab = "tab";
 const alt = "alt";
 
 // Adjust keys based on platform
 if (platform !== "darwin") {
  cmd = control;
  option = alt;
 }
 
 // --------------------- shortcut mappings ---------------------
 
 // "Navigate Slack" shortcuts
 const nav = {
  convo: ["k", [cmd]],
  mostRecentUnreadMsg: ["j", [cmd]],
  next: ["f6", []],
  prev: ["f6", [shift]],
  directMsgs: ["k", [cmd, shift]],
  channels: ["l", [cmd, shift]],
  newMsg: ["n", [cmd]],
  threadsView: ["t", [cmd, shift]], // desktop only
  prevUnread: ["up", [option, shift]],
  nextUnread: ["down", [option, shift]],
  prevVisited: ["[", [cmd]],
  nextVisited: ["]", [cmd]],
  preferences: [",", [cmd]], // desktop only
  channelDetails: ["i", [cmd, shift]],
  mentionsAndReactions: ["m", [cmd, shift]], // desktop only
  people: ["e", [cmd, shift]],
  savedItems: ["s", [cmd, shift]],
  status: ["y", [cmd, shift]],
  curSearch: ["f", [cmd]],
  prevSearch: ["g", [cmd]],
  fullScreen: ["f", [control, cmd]],
  rightSidebar: [".", [cmd]],
  leftSidebar: ["d", [cmd, shift]],
 };
 
 // "All Unreads navigation" shortcuts
 // Not implementing the last 4 shortcuts as commands because serenade already has direction commands natively
 const unread = {
  all: ["a", [cmd, shift]],
  moveUp: ["up", []],
  moveDown: ["down", []],
  openChannel: ["left", []],
  collapseChannel: ["right", []],
 };
 
 // "Switch workspaces" shortcuts
 const workspace = {
  prev: ["[", [cmd, shift]],
  next: ["]", [cmd, shift]],
  num: (num) => {
   return [num, [cmd]];
  },
 };
 
 // "Mark messages read or unread" shortcuts
 const mark = {
  curRead: ["escape", []],
  allRead: ["escape", [shift]],
 };
 
 // "Take an action on a message" shortcuts
 const msg = {
  edit: ["e", []],
  emojiReaction: ["r", []],
  thread: ["t", []],
  pinOrUnpin: ["p", []],
  share: ["s", []],
  saveOrUnsave: ["a", []],
  markRestUnread: ["u", []],
  delete: ["delete", []],
  reminder: ["m", []],
 };
 
 // "Format messages" shortcuts
 const format = {
  editLast: ["up", [cmd]],
  selectToLineStart: ["up", [shift]],
  selectToLineEnd: ["down", [shift]],
  newline: ["enter", [shift]],
  emojiReaction: ["\\", [cmd, shift]], // may vary by keyboard
  bold: ["b", [cmd]],
  italicize: ["i", [cmd]],
  strikethrough: ["x", [cmd, shift]],
  quote: ["9", [cmd, shift]],
  code: ["c", [cmd, shift]],
  codeblock: ["c", [cmd, alt, shift]],
  numList: ["7", [cmd, shift]],
  bulList: ["8", [cmd, shift]],
  markdown: ["f", [cmd, shift]],
  undo: ["z", [cmd]],
 };
 
 // "Files and snippets" shortcuts
 const file = {
  upload: ["u", [cmd]],
  downloads: ["j", [cmd, shift]],
  snippet: ["enter", [cmd, shift]],
 };
 
 // "Call actions" shortcuts
 // These are not implemented yet - not sure if this will be useful in voice form
 const call = {
  toggleMute: ["m", []],
  toggleVideo: ["v", []],
  inviteList: ["a", []],
  emojiReaction: ["e", []],
 };
 
 // General shortcuts/keys
 // TODO: expand this to facilitate more custom functionality not enabled by individual shortcuts
 const general = {
  selectAll: ["a", [cmd]],
  enter: ["enter", []],
 };
 
 // Make platform specific adjustments
 if (platform === "win32") {
  nav.prevVisited = ["left", [option]];
  nav.nextVisited = ["right", [option]];
  nav.fullScreen = ["f", [cmd, shift]];
 
  workspace.prev = ["tab", [cmd, shift]];
  workspace.next = ["tab", [cmd]];
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
 
 // --------------------- custom functionality ---------------------
 
 /**
  * Searches the user's conversations for the specified text.
  */
 serenade.app("slack").command("search <%search%>", async (api, matches) => {
  await press(nav.convo, api);
  await api.typeText(matches.search);
 });
 
 /**
  * Navigates to the specified channel.
  */
 serenade.app("slack").command("channel <%channel%>", async (api, matches) => {
  await press(nav.convo, api);
  await typeAfter("#" + matches.channel, 500, api);
  await pressAfter(general.enter, 1000, api);
 });
 
 /**
  * Searches for a DM with the specified person.
  */
 serenade.app("slack").command("message <%person%>", async (api, matches) => {
  await press(nav.directMsgs, api);
  await typeAfter(matches.person, 500, api);
  await pressAfter(general.enter, 1000, api);
  await pressAfter(nav.next, 500, api);
 });
 
 /**
  * Clears all text in a message field.
  */
 serenade.app("slack").command("clear all", async (api, matches) => {
  await press(general.selectAll, api);
  await pressAfter(msg.delete, 500, api);
 });
 
 // --------------------- shortcut commands ---------------------
 
 /**
  * Jumps to a conversation.
  */
 serenade.app("slack").command("search", async (api, matches) => {
  await press(nav.convo, api);
 });
 
 /**
  * Jumps to the most recent unread message in a conversation.
  */
 serenade.app("slack").command("recent unread", async (api, matches) => {
  await press(nav.mostRecentUnreadMsg, api);
 });
 
 /**
  * Moves focus to the next section.
  */
 serenade.app("slack").command("next", async (api, matches) => {
  await press(nav.next, api);
 });
 
 /**
  * Moves focus to the previous section.
  */
 serenade.app("slack").command("previous", async (api, matches) => {
  await press(nav.prev, api);
 });
 
 /**
  * Browses direct messages.
  */
 serenade.app("slack").command("messages", async (api, matches) => {
  await press(nav.directMsgs, api);
 });
 
 /**
  * Browses channels.
  */
 serenade.app("slack").command("channels", async (api, matches) => {
  await press(nav.channels, api);
 });
 
 /**
  * Composes a new message.
  */
 serenade.app("slack").command("new message", async (api, matches) => {
  await press(nav.newMsg, api);
 });
 
 /**
  * Opens the threads view. Works on desktop only.
  */
 serenade.app("slack").command("threads", async (api, matches) => {
  await press(nav.threadsView, api);
 });
 
 /**
  * Navigates to the previous unread channel or DM.
  */
 serenade.app("slack").command("previous unread", async (api, matches) => {
  await press(nav.prevUnread, api);
 });
 
 /**
  * Navigates to the next unread channel or DM.
  */
 serenade.app("slack").command("next unread", async (api, matches) => {
  await press(nav.nextUnread, api);
 });
 
 /**
  * Navigates to the previous visited channel or DM.
  */
 serenade.app("slack").command("previous visited", async (api, matches) => {
  await press(nav.prevVisited, api);
 });
 
 /**
  * Navigates to the next visited channel or DM.
  */
 serenade.app("slack").command("next visited", async (api, matches) => {
  await press(nav.nextVisited, api);
 });
 
 /**
  * Opens preferences. Works on desktop only.
  */
 serenade.app("slack").command("preferences", async (api, matches) => {
  await press(nav.preferences, api);
 });
 
 /**
  * Shows channel details pane.
  */
 serenade.app("slack").command("channel details", async (api, matches) => {
  await press(nav.channelDetails, api);
 });
 
 /**
  * Opens mentions and reactions. Works on desktop only.
  */
 serenade.app("slack").command("mentions", async (api, matches) => {
  await press(nav.mentionsAndReactions, api);
 });
 
 /**
  * Searches for people.
  */
 serenade.app("slack").command("people", async (api, matches) => {
  await press(nav.people, api);
 });
 
 /**
  * Navigates to saved items.
  */
 serenade.app("slack").command("saved items", async (api, matches) => {
  await press(nav.savedItems, api);
 });
 
 /**
  * Sets a status.
  */
 serenade.app("slack").command("set status", async (api, matches) => {
  await press(nav.status, api);
 });
 
 /**
  * Searches current channel or conversation.
  */
 serenade.app("slack").command("search current", async (api, matches) => {
  await press(nav.curSearch, api);
 });
 
 /**
  * Opens previous search.
  */
 serenade.app("slack").command("previous search", async (api, matches) => {
  await press(nav.prevSearch, api);
 });
 
 /**
  * Toggles full screen view.
  */
 serenade.app("slack").command("full screen", async (api, matches) => {
  await press(nav.fullScreen, api);
 });
 
 /**
  * Collapses or opens the right sidebar.
  */
 serenade.app("slack").command("right sidebar", async (api, matches) => {
  await press(nav.rightSidebar, api);
 });
 
 /**
  * Collapses or opens the left sidebar.
  */
 serenade.app("slack").command("left sidebar", async (api, matches) => {
  await press(nav.leftSidebar, api);
 });
 
 /**
  * Opens all unreads view.
  */
 serenade.app("slack").command("unread", async (api, matches) => {
  await press(unread.all, api);
 });
 
 /**
  * Navigates to the previous workspace.
  */
 serenade.app("slack").command("previous workspace", async (api, matches) => {
  await press(workspace.prev, api);
 });
 
 /**
  * Navigates to the next workspace.
  */
 serenade.app("slack").command("next workspace", async (api, matches) => {
  await press(workspace.next, api);
 });
 
 /**
  * Navigates to the specified workspace number.
  */
 serenade.app("slack").command("workspace <%number%>", async (api, matches) => {
  await press(workspace.num(matches.number), api);
 });
 
 /**
  * Marks all messages in current channel or DM as read.
  */
 serenade.app("slack").command("mark messages as read", async (api, matches) => {
  await press(mark.curRead, api);
 });
 
 /**
  * Marks all messages as read.
  */
 serenade.app("slack").command("mark all as read", async (api, matches) => {
  await press(mark.allRead, api);
 });
 
 /**
  * Edits a message in focus.
  */
 serenade.app("slack").command("change", async (api, matches) => {
  await press(msg.edit, api);
 });
 
 /**
  * Adds an emoji reaction to a message in focus.
  */
 serenade.app("slack").command("react", async (api, matches) => {
  await press(msg.emojiReaction, api);
 });
 
 /**
  * Opens or replies to a thread.
  */
 serenade.app("slack").command("reply", async (api, matches) => {
  await press(msg.thread, api);
 });
 
 /**
  * Pins a message in focus.
  */
 serenade.app("slack").command("pin", async (api, matches) => {
  await press(msg.pinOrUnpin, api);
 });
 
 /**
  * Unpins a message in focus.
  */
 serenade.app("slack").command("cancel pin", async (api, matches) => {
  await press(msg.pinOrUnpin, api);
 });
 
 /**
  * Shares a message in focus.
  */
 serenade.app("slack").command("share", async (api, matches) => {
  await press(msg.share, api);
 });
 
 /**
  * Saves a message in focus.
  */
 serenade.app("slack").command("save", async (api, matches) => {
  await press(msg.saveOrUnsave, api);
 });
 
 /**
  * Removes a message from saved items.
  */
 serenade.app("slack").command("cancel save", async (api, matches) => {
  await press(msg.saveOrUnsave, api);
 });
 
 /**
  * Mark as unread starting from a message in focus.
  */
 serenade.app("slack").command("mark rest as unread", async (api, matches) => {
  await press(msg.markRestUnread, api);
 });
 
 /**
  * Deletes a message in focus.
  */
 serenade.app("slack").command("delete", async (api, matches) => {
  await press(msg.delete, api);
 });
 
 /**
  * Creates a reminder about a message in focus.
  */
 serenade.app("slack").command("reminder", async (api, matches) => {
  await press(msg.reminder, api);
 });
 
 /**
  * Edits last message when in an empty message field.
  */
 serenade.app("slack").command("edit last", async (api, matches) => {
  await press(format.editLast, api);
 });
 
 /**
  * Selects text to beginning of current line when in a message field.
  */
 serenade
  .app("slack")
  .command("select to beginning of line", async (api, matches) => {
   await press(format.selectToLineStart, api);
  });
 
 /**
  * Selects text to end of current line when in a message field.
  */
 serenade.app("slack").command("select to end of line", async (api, matches) => {
  await press(format.selectToLineEnd, api);
 });
 
 /**
  * Creates a new line in a message field.
  */
 serenade.app("slack").command("newline", async (api, matches) => {
  await press(format.newline, api);
 });
 
 /**
  * Adds an emoji reaction to a message field.
  */
 serenade.app("slack").command("emoji", async (api, matches) => {
  await press(format.emojiReaction, api);
 });
 
 /**
  * Bolds selected text in a message field.
  */
 serenade.app("slack").command("bold", async (api, matches) => {
  await press(format.bold, api);
 });
 
 /**
  * Italicizes selected text in a message field.
  */
 serenade.app("slack").command("italicize", async (api, matches) => {
  await press(format.italicize, api);
 });
 
 /**
  * Strikes through selected text in a message field.
  */
 serenade.app("slack").command("strikethrough", async (api, matches) => {
  await press(format.strikethrough, api);
 });
 
 /**
  * Quotes selected text in a message field.
  */
 serenade.app("slack").command("quote", async (api, matches) => {
  await press(format.quote, api);
 });
 
 /**
  * Codes selected text in a message field.
  */
 serenade.app("slack").command("code", async (api, matches) => {
  await press(format.code, api);
 });
 
 /**
  * Codeblocks selected text in a message field.
  */
 serenade.app("slack").command("codeblock", async (api, matches) => {
  await press(format.codeblock, api);
 });
 
 /**
  * Turns selected text in a message field into a numbered list.
  */
 serenade.app("slack").command("number list", async (api, matches) => {
  await press(format.numList, api);
 });
 
 /**
  * Turn selected text in a message field into a bulleted list.
  */
 serenade.app("slack").command("bullet list", async (api, matches) => {
  await press(format.bulList, api);
 });
 
 /**
  * Applies formatting when you copy and paste texts in markdown from another source into slack.
  */
 serenade.app("slack").command("markdown", async (api, matches) => {
  await press(format.markdown, api);
 });
 
 /**
  * Undos message formatting in a message field.
  */
 serenade.app("slack").command("undo", async (api, matches) => {
  await press(format.undo, api);
 });
 
 /**
  * Uploads a file.
  */
 serenade.app("slack").command("upload file", async (api, matches) => {
  await press(file.upload, api);
 });
 
 /**
  * Views all downloaded files.
  */
 serenade.app("slack").command("downloads", async (api, matches) => {
  await press(file.downloads, api);
 });
 
 /**
  * Creates a new snippet.
  */
 serenade.app("slack").command("new snippet", async (api, matches) => {
  await press(file.snippet, api);
 });
 