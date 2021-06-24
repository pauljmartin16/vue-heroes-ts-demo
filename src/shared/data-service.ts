import * as axios from 'axios';

// Applying DTOs POJOs for illustration, here they're public & shared for convenience

class HeroResponseDto {
  public data!: HeroDto[]
}
class HeroDto {
  public capeCounter!: number;
  public firstName!: string;
  public id!: number;
  public lastName!: string;
  public originDate!: Date;
  public description!: string;
}

export class Hero {
  public capeCounter!: number;
  public firstName!: string;
  public id!: number;
  public lastName!: string;
  public originDate!: Date;
  public description!: string;
}

interface IDataCallback {
  (data: HeroCollection): void;
}

export class HeroCollection {
  constructor(public heroes: Hero[]) {
  }
}

export default class DataService {
  public getHeroes(callback: IDataCallback): void {

    axios.default.request<string,HeroResponseDto>({
      method: 'get',
      url: 'api/heroes.json'
    }).then((response: HeroResponseDto) => {

      var heroCollection: Hero[] = [];
      response.data.forEach((heroDto:HeroDto) => {
        // not doing much, representing dto=>pojo
        let newHero:Hero=Object.assign({}, heroDto);
        heroCollection.push(newHero);
        // wondering if Vuex could be used here?
      });

      // This will do, rxjs would be better
      var dataToReturn= new HeroCollection(heroCollection);
      callback(dataToReturn);
    }).catch((reason: any) => {
      // error handling here
    });
  }
}
