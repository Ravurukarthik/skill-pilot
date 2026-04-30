
/**
 * A safe version of JSON.stringify that handles circular references
 * and other common serialization issues.
 */
export function safeStringify(obj: any, indent = 2): string {
  const cache = new WeakSet();
  
  const replacer = (_key: string, value: any) => {
    // Check for circular references
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular]';
      }
      cache.add(value);

      // Handle common problematic objects
      
      // 1. React elements (they have $$typeof)
      if (value.$$typeof) {
        return '[ReactElement]';
      }

      // 2. DOM elements
      if (value instanceof Node) {
        return '[DOMNode]';
      }

      // 3. Document/Window objects
      if (value === window) return '[Window]';
      if (value === document) return '[Document]';

      // 4. Firebase-specific internal structures
      // If the object looks like a Firebase document, reference, or snapshot
      if (value.constructor && (
        value.constructor.name === 'DocumentSnapshot' || 
        value.constructor.name === 'QuerySnapshot' || 
        value.constructor.name === 'DocumentReference' ||
        value.constructor.name === 'Firestore' ||
        value.constructor.name === 'Auth'
      )) {
        return `[Firebase ${value.constructor.name}]`;
      }
      
      // Fallback for minified class names like Y2, Ka
      // If it's a huge object with suspicious internal properties
      if (value._delegate || value._firestore || value._auth || value._databaseId) {
        return `[Internal Firebase Object]`;
      }

      // Handle Error objects
      if (value instanceof Error) {
        return {
          name: value.name,
          message: value.message,
          stack: value.stack,
        };
      }
    }
    
    // Handle BigInt which JSON.stringify doesn't support
    if (typeof value === 'bigint') {
      return value.toString();
    }

    // Handle functions
    if (typeof value === 'function') {
      return '[Function]';
    }

    return value;
  };

  try {
    return JSON.stringify(obj, replacer, indent);
  } catch (error) {
    console.warn('safeStringify: Primary attempt failed, using destructive fallback', error);
    try {
      // Destructive fallback: only keep primitive values at the root
      if (typeof obj !== 'object' || obj === null) return String(obj);
      
      const safeObj: any = {};
      for (const [key, val] of Object.entries(obj)) {
        if (['string', 'number', 'boolean'].includes(typeof val)) {
          safeObj[key] = val;
        } else {
          safeObj[key] = `[Too Complex: ${typeof val}]`;
        }
      }
      return JSON.stringify(safeObj, null, indent);
    } catch {
      return '[Unstringifiable Object]';
    }
  }
}
