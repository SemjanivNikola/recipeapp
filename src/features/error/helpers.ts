import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function isClientBaseError(error: object): error is { error: string } {
  return "error" in error && typeof error.error === "string";
}

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "data" in error;
}
