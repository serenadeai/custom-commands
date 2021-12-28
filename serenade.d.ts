type application = string
type language = string
type extension = string
type url = string
/**Voice trigger for this command */
type trigger = string
/**A string that specifies the trigger for the voice command. Surrounding text in <% %> creates a matching slot that matches any text. You can then reference the matched text in the generated snippets, much like regular expression capture groups. */
type templated = trigger
/**A snippet to generate. You can use<% %> to reference matching slots. You can also define the default formatting for any matching slot by putting a colon after the slot's name; to specify multiple styles, separate them with commands. The default text style is lowercase. Possible values for formatting are: 
 * caps All capital letters.
 * capital The first letter of the first word capitalized.
 * camel Camel case.
 * condition The condition of an if, for, while, etc.—symbols like "equals" will automatically become "==". condition impliesexpression.
 * dashes Dashes between words.
 * expression Any expression; symbols will be automatically mapped, so dashwill become -.
 * identifier The name of a function, class, variable, etc.; symbols will be automatically escaped, so dash will become dash.
 * lowercase Spaces between words.
 * pascal Pascal case.
 * underscores Underscores between words.
 */
type templated = string
/** Command ID that can be passed to enable or disable. */
type command_id = string
type key = string
type css_selector = string
type generated = string
type transform = "inline" | "argument" | "attribute" | "catch" | "class" | "decorator" | "element" | "else" | "else_if" | "entry" | "enum" | "extends" | "finally" | "function" | "import" | "method" | "parameter" | "return_value" | "ruleset" | "statement" | "tag"
/**Function to be executed when the specified trigger is heard */
type callback = (api: api, matched: { [match_name: string]: string }) => Promise<void>
type options = {
   /**Default: false */
   autoExecute: boolean
   /**Default: 'none' */
   chainable: 'none' | 'any' | 'firstOnly' | 'lastOnly'
}
type api_result = Promise<undefined>
type button_click = 'left' | 'right' | 'middle'
type api = {
   /**Trigger a mouse click. */
   click: (button?: button_click, count?: number) => api_result
   /**Click a native system button matching the given text. Currently macOS only.*/
   clickButton: (button: string) => api_result
   /**Currently available only in Chrome. Remove keyboard focus from the first DOM element matching the given CSS selector string. */
   domBlur: (selector: css_selector) => api_result
   /**Currently available only in Chrome. Click on the first DOM element matching the given CSS selector string. */
   domClick: (selector: css_selector) => api_result
   /**Currently available only in Chrome. Copy all of the text contained within the first DOM element matching the given CSS selector string. */
   domCopy: (selector: css_selector) => api_result
   /**Currently available only in Chrome. Give keyboard focus the first DOM element matching the given CSS selector string. */
   domFocus: (selector: css_selector) => api_result
   /**Currently available only in Chrome. Scrolls to the first DOM element matching the given CSS selector string. */
   domScroll: (selector: css_selector) => api_result
   /**Currently available only on VS Code. Evaluate a command inside of a plugin. On VS Code, the command argument is passed to vscode.commands.executeCommand. */
   evaluateInPlugin: (command: string) => api_result
   /**Bring an application to the foreground. */
   focusApplication: (application: string) => api_result
   /**Get the path of the currently-active application. */
   getActiveApplication: () => Promise<string>
   /**Get a list of all of the buttons that can currently be clicked (i.e., are visible in the active application). Currently macOS only. */
   getClickableButtons: () => Promise<string[]>
   /**Get a list of applications installed on the system.*/
   getInstalledApplications: () => Promise<application[]>
   /**Get a list of applications installed on the system.*/
   getMouseLocation: () => Promise<{ x: number, y: number }>
   /**Get a list of currently-running applications.*/
   getRunningApplications: () => Promise<application[]>
   launchApplication: (application: application) => Promise<string[]>
   mouseDown: (button?: button_click) => api_result
   mouseUp: (button?: button_click) => api_result
   pressKey: (key: key, modifiers?: key[], count?: number) => api_result
   quitApplication: (application: application) => api_result
   /**
    * Execute a voice command.
    * @param command  Transcript of the command to run (e.g., "go to line 1" or "next tab").
    */
   runCommand: (command: string) => api_result
   /**
   * Run a command at the shell.
   * @param command Name of the executable to run.
   * @param args List of arguments to pass to the executable.
   * @param options Object of spawn arguments. Can simply be . See https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options for more.
   */
   runShell: (command: string, args?: string[], options?: any) => Promise<{ stdout: string, stderr: string }>
   /**Move the mouse to the given coordinates, with the origin at the top-left of the screen. */
   setMouseLocation: (x: number, y: number) => api_result
   typeText: (text:string) => api_result
}
type builder = {
   /**Register a new voice command. */
   command: (trigger: trigger, callback: callback, options?: options) => command_id,
   /**Disable a voice command. */
   disable: (id: command_id | command_id[]) => void,
   /**Enable a voice command. */
   enable: (id: command_id | command_id[]) => void,
   /** Shortcut for the command method if you just want to map a voice trigger to a keypress. This method is equivalent to:command("trigger", async api => { api.pressKey(key, modifiers); }); */
   key: (trigger: trigger, key: key, modifiers?: key[], options?: options) => command_id,
   /**Register a new snippet. */
   snippet: (templated: templated, generated: generated, transform?: transform) => command_id | undefined,
   /**Shortcut for the command method if you just want to map a voice trigger to to typing a string. This method is equivalent to: command("trigger", async api => { api.typeText(text); }); */
   text: (trigger: trigger, text: string, options?: options) => command_id | undefined,
}

type serenade = {
   /**Create a new Builder with a global scope. Any commands registered with the builder will be valid regardless of which application is focused or language is used. */
   global: () => builder
   /**Create a new Builder scoped to the given application. Any commands registered with the builder will only be valid when the given application is in the foreground. */
   app: (application: application) => builder
   /**Create a new Builder scoped to the given language. Any commands registered with the builder will only be valid when editing a file of the given language.*/
   language: (language: language) => builder
   /**Create a new Builder scoped to the given applications and languages. Any commands registered with the builder will only be valid when one of the given applications is focused and one of the given languages is being used. To specify any application or language, pass an empty list for that parameter.*/
   scope: (applications: application[], languages: language[]) => builder
   /**Create a new Builder scoped to the given file extension. Any commands registered with the builder will only be valid when editing a file with the given extension.*/
   extension: (extension: extension) => builder
   /**Create a new Builder scoped to a specific URL or domain name when using Chrome with the Serenade extension. Commands registered with this builder will only be valid when the active tab matches one of the given URLs.*/
   url: (urls: url[]) => builder
}
declare var serenade: serenade
