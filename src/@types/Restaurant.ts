export interface Restaurant {
  id: number;
  email: string;
  password: string;
  name: string;
  address: string;
  rating: number;
  horaAbertura: Date;
  horaFechamento: Date;
  maps: string;
  photo: string;
  bairroId: number;
  nif: string;
  phone1: number;
  phone2?: number | null;
}
