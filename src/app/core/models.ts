export interface ApiModel {
  purchaser: Purchaser;
  totalPrice: number;
}

export interface Purchaser {
  id: number;
  name: string;
  email: string;
  address: Address;
}

export interface Address {
  street: string;
  no: string;
  city: string;
  postalCode: string;
}

export function getApiModel(): ApiModel {
  return {
    purchaser: {
      id: 10,
      name: 'Dodo',
      email: 'dodo@dodko.sk',
      address: {
        street: 'Bajzova',
        no: '90/493',
        city: 'Predmier',
        postalCode: '013 51'
      }
    },
    totalPrice: 500,
  }
}

export function getEmptyModel(): ApiModel {
  return {
    purchaser: {
      id: 0,
      name: '',
      email: '',
      address: {
        street: '',
        no: '',
        city: '',
        postalCode: ''
      }
    },
    totalPrice: 0,
  }
}
