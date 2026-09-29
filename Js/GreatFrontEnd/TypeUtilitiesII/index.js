function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === "function";
}

function isObject(value) {
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
