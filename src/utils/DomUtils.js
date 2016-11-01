/**
 * Utilities makes it easier to manipulate DOM.
 * since Oct 2016. Documented by Engine. engine@zoyi.co
 */

/**
 * Register DOM node in a JavaScript object. Note that refs should always be an object
 * so that it can get the reference, not the value.
 * @refs {}
 * @key name of the DOM node
 * @elem actual DOM node
 */
export function setRefToNode(refs, key, elem) {
  if (!refs[key]) {
    refs[key] = elem
  }
}
