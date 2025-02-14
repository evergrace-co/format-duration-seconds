interface FormatDurationOptions {
  /**
   * Adds leading zero to the formatted string.
   */
  leading: boolean
}

/**
 * Convert a number in seconds to a standard duration string.
 *
 * @param {number} seconds The number to format.
 * @param {object} options - Formatting options
 * @returns {string} The formatted duration string.
 */
 declare function formatDuration (seconds: number, options?: FormatDurationOptions): string

 export = formatDuration
