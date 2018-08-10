/* Input validation for Vuetify; return true or an error message string */

/**
 * @param value
 * @returns {boolean|string}
 */
export function nonempty (value) {
  return !!value || 'Required'
}

/**
 * minLength(8) returns a function which can be used as a vuetify input "rule" checking the input is at least 8 characters long
 * @param length
 * @returns {function(string): (boolean|string)}
 */
export function minLength (length) {
  return str => str.length >= length || `Min ${length} characters`
}

/**
 * @param str
 * @returns {boolean | string}
 */
export function isEmail (str) {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(str).toLowerCase()) || 'Not a valid email address'
}

/**
 * Validates an object's value using the object's array of rules. Rules are functions like isEmail or minLength(8) (see above)
 * @param obj
 * @returns {boolean}
 */
export function isValid (obj) {
  if (!obj.value || !obj.rules) {
    return false
  }
  for (let i = 0; i < obj.rules.length; i++) {
    const result = obj.rules[i](obj.value)
    if (result === false || typeof result === 'string') {
      return false
    }
  }
  return true
}
