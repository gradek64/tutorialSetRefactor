//check if key exists in object with generics

const getObjectPropertyValue = <T extends object, U extends keyof T>(
  obj: T,
  key: U
): string => {
  return 'the value is' + obj[key];
};

getObjectPropertyValue({}, 'name'); //error
getObjectPropertyValue({ name: 'Greg' }, 'name'); //correct
