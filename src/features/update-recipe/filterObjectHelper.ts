type NonNullableKeysExcluded<T> = { [K in keyof T]: T[K] extends null | undefined ? never : K }[keyof T];

type ReturnType<T> = Pick<T, NonNullableKeysExcluded<T>>;

export default function filterObject<T extends Record<string, unknown>>(obj: T): ReturnType<T> {
  const newObj: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined && value !== "") {
      newObj[key] = value;
    }
  }

  return newObj as ReturnType<T>;
}
