import {Employees} from '../../aplication/about-us/interfaces/employees.interface';
export interface Company {
    country: string;
    city: string;
    street: string;
    apartment: string;
    email: string;
    phone: string;
    employees: Array<Employees>;
}
