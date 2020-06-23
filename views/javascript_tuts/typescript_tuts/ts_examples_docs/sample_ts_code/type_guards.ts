//type guard is the way of checking if the property can be accessible on object, array

interface Bird {
  kind: 'bird'; //literal type
  flyingSpeed: number;
}

interface Horse {
  kind: 'horse'; //literal type
  runnigSpeed: number;
}

type Animal = Bird | Horse;
type Animal2 = 'Bird' | 'Horse';

const arr: [string, number] = ['3', 4];

const ani: Animal2 = 'Bird';
const ani2: Animal2 = 'Horse';

function moveAnimal(animal: Animal) {
  //1. One options is to use loop 'property' in object
  if ('flyingSpeed' in animal) {
    console.log('Animal is moving with', animal.flyingSpeed);
  }

  if ('runnigSpeed' in animal) {
    console.log('Animal is moving with', animal.runnigSpeed);
  }
}

//discriminated unions with switch statement (access some common property as comparison)
function moveAnimalDiscriminatedTypes(animal: Animal) {
  switch (animal.kind) {
    case 'bird':
      console.log('Animal is moving with', animal.flyingSpeed);
      break;
    case 'horse':
      console.log('Animal is moving with', animal.runnigSpeed);
      break;
    default:
      break;
  }
}
