class CardModel {
  id: number;
  name: string;
  power: number;
  toughness: number;
  description: string;
  artist: string;
  img: string;

  constructor(id: number, name: string, power: number, toughness: number, description: string, artist: string, img: string) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.toughness = toughness;
    this.description = description;
    this.artist = artist;
    this.img = img;
  }
}

export default CardModel;
