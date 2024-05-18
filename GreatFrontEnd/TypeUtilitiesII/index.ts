function isArrayTs(value: unknown): boolean {
  return Array.isArray(value);
}

function isFunctionTs(value: unknown): boolean {
  return typeof value === "function";
}

function isObjectTs(value: unknown): boolean {
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

function isPlainObjectTs(value: unknown): boolean {
  if (value === null || typeof value !== "object") {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
