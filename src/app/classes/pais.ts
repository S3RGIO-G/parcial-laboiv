

export class Pais{
  img: string;
  name: string;
  language: string;

  constructor(name :string = '', img :string = '') {
    this.name = name;
    this.img = img;
    this.language = 'Español';

  }
}