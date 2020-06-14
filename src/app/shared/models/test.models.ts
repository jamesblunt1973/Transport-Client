export interface ICompany {
    id: number,
    name: string,
    address: string,
    cityId: number,
    email: string,
    phone: string,

    city: ICity,
    country: ICountry,
    companyUsers 
}

export interface ICity {
    id: number,
    name: string,
    countryId: number
}

export interface ICountry {
    id: number,
    name: string,
    cities: ICity[]
}