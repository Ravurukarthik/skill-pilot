
/**
 * A safe version of JSON.stringify that handles circular references
 */
export function safeStringify(obj: any, indent = 2): string {
  const cache = new Set();
  const stringified = JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          return '[Circular]';
        }
        cache.add(value);
      }
      return value;
    },
    indent
  );
  cache.clear();
  return stringified;
}
