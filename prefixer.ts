type Prefixer<T extends object, P extends string> = {
    [Key in keyof T as `${P}__${string & Key}`]: T[Key];
}
type DePrefixer<T extends object, U extends string> = {
    [Key in keyof T as `${Key extends `${U}__${infer K}` ? K: never}`]: T[Key]
}
function addPrefixer<T extends object, U extends string>(prefix: U, data: T | {}): Prefixer<T, U> | {} {
const keys = Object.keys(data);
if (!keys.length) return {};
  return keys.reduce((result, key) => {
        const mapped = key as keyof typeof data;
      const value = data[mapped];
      return {...result, [`${prefix}__${key}`]: value}
  }, {});
}

function removePrefixer<T extends {[key: string]: T[keyof T]}, U extends string>(prefix: U, data: Prefixer<T, U> | {}): DePrefixer<Prefixer<T, U>, U> | {} {
  const keys = Object.keys(data);
  if (!keys.length) return {};
  return keys.reduce((result, key) => {
        const mapped = key as keyof typeof data;
        return {...result, [key.replace(`${prefix}__`, "")]: data[mapped]};
  }, {});
}

type CountryCode = "VN" | "EN" | "SA";

type Supplier = {
  signed: Date;
  id: string;
  name: string;
  address: string;
  email: string;
}

type SupplierPrefixer = Prefixer<Supplier, "Supplier">

type CountryCodeSupplierPrefixer = Prefixer<SupplierPrefixer, CountryCode>

type TestUP = DePrefixer<SupplierPrefixer, "Supplier">

const p = addPrefixer("Supplier", {
    id: "1",
    name: "z",
    address: "1bacasd"
})
console.log(p)
console.log(removePrefixer("Supplier", p));
