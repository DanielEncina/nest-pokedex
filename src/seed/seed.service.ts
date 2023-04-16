import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/poke-response.interfaces';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios-adapter.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      name = name.toLowerCase();
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seeded successfully!';
  }

  // async executeSeed() {
  //   await this.pokemonModel.deleteMany({});

  //   const { data } = await this.axios.get<PokeResponse>(
  //     'https://pokeapi.co/api/v2/pokemon?limit=100',
  //   );

  //   const insertPromisesarray = [];
  //   data.results.forEach(({ name, url }) => {
  //     name = name.toLowerCase();
  //     const segments = url.split('/');
  //     const no = +segments[segments.length - 2];
  //     insertPromisesarray.push(this.pokemonModel.create({ name, no }));
  //   });
  //   await Promise.all(insertPromisesarray);
  //   return 'Seeded successfully!';
  // }
}
