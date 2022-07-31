interface Package {
  /**
   * Defines the name of your plugin, this variable takes
   * the value of the `displayName` key (wich is inside the
   * `solarstats` key).
   *
   * If the `displayName` key isn't specified, the name
   * of the package is used by default (`name` key).
   *
   * @example Here the value of this variable will be `Test`.
   * File: `package.json`
   * ```json
   * {
   *  "name": "test",
   *  [...]
   *  "solarstats": {
   *    "displayName": "Test"
   *  }
   * }
   * ```
   */
  name: string;
  /**
   * Defines the description of your plugin, this variable
   * takes the value of the `description` key (`package.json`)
   */
  description: string;
  /**
   * Defines the version of your plugin, this variable
   * takes the value of the `version` key (`package.json`)
   */
  version: string;
  /**
   * Defines the author of your plugin, this variable
   * takes the value of the `author` key (`package.json`)
   */
  author: string;
}

declare const __package: Package;
