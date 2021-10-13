import {ICountry} from "./country";

export interface ICustomer {
  id?: number;
  name?: string;
  phone?: string;
  state?: boolean;
  country?: ICountry[] | null;
}
export class Customer implements ICustomer {

  constructor(
    public id?: number,
    public name?: string,
    public phone?: string,
    public state?: boolean,
    public country?: ICountry[] | null

  ) {}
}
