
/**
 * Safe JSON stringify that handles circular references and common non-serializable objects
 */
export function safeStringify(obj: any): string {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular]';
      }
      cache.add(value);
    }
    
    // Handle Error objects - they don't stringify well by default
    if (value instanceof Error) {
      return {
        name: value.name,
        message: value.message,
        stack: value.stack,
        ...value
      };
    }

    // Handle bigints
    if (typeof value === 'bigint') {
        return value.toString();
    }

    return value;
  });
}

/**
 * Safe JSON parse that handles errors gracefully
 */
export function safeParse<T>(json: string): T | null {
  try {
    return JSON.parse(json) as T;
  } catch (e) {
    console.error('Failed to parse JSON:', e);
    return null;
  }
}
