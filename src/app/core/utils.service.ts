import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  destroyCircular(from, seen) {
    const to = Array.isArray(from) ? [] : {};

    seen.push(from);

    for (const [key, value] of Object.entries(from)) {
      if (typeof value === 'function') {
        continue;
      }

      if (!value || typeof value !== 'object') {
        to[key] = value;
        continue;
      }

      if (!seen.includes(from[key])) {
        to[key] = this.destroyCircular(from[key], seen.slice());
        continue;
      }

      to[key] = '[Circular]';
    }

    const commonProperties = ['name', 'message', 'stack', 'code'];

    for (const property of commonProperties) {
      if (typeof from[property] === 'string') {
        to[property] = from[property];
      }
    }

    return to;
  }

  serializeError(value) {
    if (typeof value === 'object') {
      return this.destroyCircular(value, []);
    }

    // throw things besides Error objects…
    if (typeof value === 'function') {
      // `JSON.stringify()` discards functions. We do too, unless a function is thrown directly.
      return `[Function: ${value.name || 'anonymous'}]`;
    }

    return value;
  }

}
