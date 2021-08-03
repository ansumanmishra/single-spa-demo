// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from "rxjs";

export function publicApiFunction() {}

export const keyword$ = new BehaviorSubject(undefined);
