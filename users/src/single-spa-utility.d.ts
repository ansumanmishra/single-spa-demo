declare module '@demo/utility' {
  import { BehaviorSubject } from 'rxjs';
  const keyword$: BehaviorSubject<string>;
}

// Using imports inside definition file - https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts
