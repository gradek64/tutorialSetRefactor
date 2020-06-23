type Admin = {
  name: string;
  privilages: string;
};

type Employee = {
  position: string;
  startDate: Date;
};

type ITEmployee = Admin & Employee;

const ITEmployee1: ITEmployee = {
  name: 'Greg',
  privilages: 'rwe',
  position: 'developer',
  startDate: new Date(),
};

//same can be achived with interfaces
interface AdminInterface {
  name: string;
  privilages: string;
}

interface EmployeeInterface {
  position: string;
  startDate: Date;
}

interface ITEmployeeInterface extends AdminInterface, EmployeeInterface {} //extendsAdminInterface, EmployeeInterface  object

const ITEmployeeInterface1: ITEmployeeInterface = {
  name: 'Greg',
  privilages: 'rwe',
  position: 'developer',
  startDate: new Date(),
};

//intersection types with union types (will take nuber that is common means that intesect with each other)
type one = string | number;
type two = number | boolean;

type combined = one & two; //for those two types interesection is number

//string takes priority for this setter type since both one & two types have common string type
const setter: combined = 3;
