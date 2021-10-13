export interface ICountry {
  id?: number | null;
  name?: string | null;
  code?: string | null;
  regex?: string | null;
}

export class Country implements ICountry{

  constructor(
    public  id?: number | null,
    public  name?: string | null,
    public code?: string | null,
    public regex?: string | null,
    ) {}
}
