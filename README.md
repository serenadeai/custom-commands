<img src="https://cdn.serenade.ai/img/logo-github.png" width="250px" alt="Serenade Logo" />

# Serenade Custom Command Examples

This repository contains examples of custom Serenade commands across different platforms and languages. Whether you're looking to grab some pre-made automations or browse some examples before writing your own, this repository is a great place to start.

To learn more about custom Serenade commands, check out the [Serenade Documentation](https://serenade.ai/docs#custom-commands).

## Installing Custom Commands

Custom Serenade commands live in the `~/.serenade/scripts` directory (`C:\Users\<USERNAME>\.serenade\scripts` on Windows). Any file in that directory will automatically be loaded by the app as a custom command.

To start using any of the custom commands defined here, simply copy them into a JavaScript file in your scripts directory.

## Contributing Custom Commands

Pull Requests are encouraged! If you've created a custom command, there's a good chance that other developers in the community would benefit from it as well. Simply fork this repository and create a Pull Request with your new functionality.

Before submitting a Pull Request, make sure your new command follows these simple conventions:

* Inside of `languages/`, there should be a directory per language.
    * Inside of a language directory, like `languages/javascript/`, there should be a file for each library or framework. For instance, React custom commands would live in `languages/javascript/react.js`.
    * Framework-agnostic JavaScript commands would live in `languages/javascript/javascript.js`.
* Inside of `applications/`, there should be a file per application.
    * For instance, custom commands for Safari would live in `applications/safari.js`.
* The directory `system/` is used for platform-specific, system-wide automations, like switching desktops on macOS.

If you have any questions, reach out to the [Serenade Community](https://serenade.ai/community)!
