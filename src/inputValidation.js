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
 * maxLength(25) returns a function which can be used as a vuetify input "rule" checking the input is at most 25 characters long
 * @param length
 * @returns {function(string): (boolean|string)}
 */
export function maxLength (length) {
  return str => str.length <= length || `Max ${length} characters`
}

/**
 * inRange(8, 16) returns a function which can be used as a vuetify input "rule" checking the input is at least 8 ans at most 16 characters long
 * @param length
 * @returns {function(string): (boolean|string)}
 */
export function inRange (min, max) {
  return combineRules([minLength(min), maxLength(max)])
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
  return abidesBy(obj.value, combineRules(obj.rules))
}

/**
 * Combines an array of rules into one rule which returns the first failure
 * @param rules The array of rules to combine
 * @returns {function(*=): boolean}
 */
function combineRules (rules) {
  return (value) => {
    const failingRule = rules.find(rule => !abidesBy(value, rule))
    return failingRule ? failingRule(value) : true
  }
}

/**
 * Checks if a value abides by a rule
 * @param value the value to check
 * @param rule The rule to apply
 * @returns {boolean}
 */
function abidesBy (value, rule) {
  return rule(value) === true
}
