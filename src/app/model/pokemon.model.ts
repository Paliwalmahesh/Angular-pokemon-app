export class specialityModel {
  id: number = 0;
  name: string = '';
}
export class PokemonModel {
  id?: number = 0;
  name: string = '';
  speciality: specialityModel = {
    id: 0,
    name: '',
  };
  imageUrl: string = '';
}
export class pokemonCreate {
  name: string = '';
  specialityId: number = 0;
  imageUrl: string = '';
}
