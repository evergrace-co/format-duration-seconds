// Adapted from https://github.com/sindresorhus/parse-ms.
function parseMs (seconds) {
  if (typeof seconds !== 'number') {
    throw new TypeError('Expected a number')
  }
  return {
    hours: Math.trunc(seconds / 3600) % 24,
    minutes: Math.trunc(seconds / 60) % 60,
    seconds: Math.trunc(seconds) % 60,
  }
}

// Adapted from https://github.com/rafaelrinaldi/add-zero.
function addZero (value, digits) {
  digits = digits || 2
  const str = value.toString()
  const size = digits - str.length + 1
  return new Array(size).join('0').concat(str)
}

/**
 * Convert a number in seconds to a standard duration string.
 * @param {number} ms - duration in seconds
 * @param {object} options - formatDuration options object
 * @param {boolean} [options.leading=false] - add leading zero
 * @returns string - formatted duration string
 */
function formatDuration (ms, options) {
  const leading = options && options.leading
  const unsignedMs = ms < 0 ? -ms : ms
  const sign = ms <= -1000 ? '-' : ''
  const t = parseMs(unsignedMs)
  if (t.hours) return sign + (leading ? addZero(t.hours) : t.hours) + ':' + addZero(t.minutes)
  return sign + (leading ? addZero(t.minutes) : t.minutes)
}

module.exports = formatDuration
