import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcaService {

  constructor(
    @InjectRepository(Marca)
    private marcaRepository: Repository<Marca>,
  ){}

  async findAll(): Promise<Marca[]> {
    return this.marcaRepository.find();
  }

  async findOne(id: number): Promise<Marca | null> {
    return this.marcaRepository.findOneBy({id});
  }

  async create(nombre: string): Promise<Marca> {
    const marca = this.marcaRepository.create({nombre});
    return this.marcaRepository.save(marca);
  }

  async update(id: number, nombre: string): Promise<Marca> {
    const marca = await this.findOne(id);
    if (!marca) throw new Error("no existe con ese id");
    marca.nombre = nombre;
    return this.marcaRepository.save(marca);
  }

  async remove(id: number): Promise<void> {
    const marca = this.findOne(id);
    if(!marca) throw new Error("no se peude borrar algo que no existe, wachin");
    await this.marcaRepository.remove(marca);
  }
}
