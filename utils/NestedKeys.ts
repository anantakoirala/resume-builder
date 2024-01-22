import { Resume } from "@/schema/resume";

export function getNestedKeys(obj: any, depth: number = 1): string[] {
  let keys: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
      if (depth < 4 && typeof obj[key] === "object") {
        const nestedKeys = getNestedKeys(obj[key], depth + 1);
        keys = keys.concat(
          nestedKeys.map((nestedKey) => `${key}.${nestedKey}`)
        );
      }
    }
  }

  return keys;
}

export function getValueByPath(obj: Resume, path: string): any | undefined {
  const keys = path.split(".");

  let result: any = obj.data;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }

  return result;
}

export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never
        ? ""
        : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;

export type Paths<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}`;
    }[keyof T]
  : never;

export type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | `${K}.${DeepKeys<T[K]>}`
        : never;
    }[keyof T]
  : never;

export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export function getValueFromPath<T extends Record<string, unknown>>(
  obj: T,
  path: string
): unknown {
  const keys = path.split(".");
  let value: unknown = obj;

  for (const key of keys) {
    if (
      value &&
      typeof value === "object" &&
      key in (value as Record<string, unknown>)
    ) {
      value = (value as Record<string, unknown>)[key];
    } else {
      // Handle invalid path or missing keys here
      value = undefined;
      break;
    }
  }

  return value;
}
