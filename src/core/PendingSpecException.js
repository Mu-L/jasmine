getJasmineRequireObj().PendingSpecException = function(j$, private$) {
  'use strict';

  class PendingSpecException extends Error {
    constructor(message) {
      super();
      this.message = message;
      this.name = 'PendingSpecException';
    }
  }

  return PendingSpecException;
};
