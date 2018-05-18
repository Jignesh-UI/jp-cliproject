import { ErrorHandler } from '@angular/core';
export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(error);
    alert('un expected error '); // in future we can display toast notification
    console.log(error); // we can log this error on server
  }
}
