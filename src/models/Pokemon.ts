export class Pokemon {
  public id: string;
  public name: string;
  public supertype: string;
  public subtypes: [string];
  public level: string;
  public hp: number;
  public types: [string];
  public evolvesFrom: string;
  public evolvesTo: [string];
  public rules: [string];
  public ancientTrait: { name: string, text: string };
  public abilities: [{ name: string, text: string, type: string }];
  public attacks: [{ cost: [string], name: string, text: string, damage: string, convertedEnergyCost: number }];
  public weaknesses: [{ type: string, value: string }];
  public resistances: [{ type: string, value: string }];
  public retreatCost: [string];
  public convertedRetreatCost: number;
  public set: string;
  public number: string;
  public artist: string;
  public rarity: string;
  public flavorText: string;
  public nationalPokedexNumbers: [number];
  public legalities: { standard: string, expanded: string, unlimited: string };
  public images: { small: string, large: string };
  public tcgplayer: {
    url: string, updatedAt: string, prices:
      { low: number, mid: number, high: number, market: number, directLow: number },
  };
  public cardmarket: {
    url: string, updatedAt: string, prices: {
      averageSellPrice: number,
      lowPrice: number,
      trendPrice: number,
      germanProLow: number,
      suggestedPrice: number,
      reverseHoloSell: number,
      reverseHoloLow: number,
      reverseHoloTrend: number,
      lowPriceExPlus: number,
      avg1: number,
      avg7: number,
      avg30: number,
      reverseHoloAvg1: number,
      reverseHoloAvg7: number,
      reverseHoloAvg30: number,
    },
  };

  constructor(id, name, supertype, subtypes, level, hp, types, evolvesFrom, evolvesTo, rules, ancientTrait, abilities, attacks, weaknesses,
              resistances, retreatCost, convertedRetreatCost, set, number, artist, rarity, flavorText, nationalPokedexNumbers, legalities,
              images, tcgplayer, cardmarket) {
    this.id = id;
    this.name = name;
    this.supertype = supertype;
    this.subtypes = subtypes;
    this.level = level;
    this.hp = hp;
    this.types = types;
    this.evolvesFrom = evolvesFrom;
    this.evolvesTo = evolvesTo;
    this.rules = rules;
    this.ancientTrait = ancientTrait;
    this.abilities = abilities;
    this.attacks = attacks;
    this.weaknesses = weaknesses;
    this.resistances = resistances;
    this.retreatCost = retreatCost;
    this.convertedRetreatCost = convertedRetreatCost;
    this.set = set;
    this.number = number;
    this.artist = artist;
    this.rarity = rarity;
    this.flavorText = flavorText;
    this.nationalPokedexNumbers = nationalPokedexNumbers;
    this.legalities = legalities;
    this.images = images;
    this.tcgplayer = tcgplayer;
    this.cardmarket = cardmarket;
  }
}
