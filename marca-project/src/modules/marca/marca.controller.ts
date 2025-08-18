import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';

@Controller('marca')
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) {}

  @Get()
  async findAll(): Promise<Marca[]> {
    return this.marcaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: int) {
    return this.marcaService.findOne(+id);
  }

  @Post()
  async create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcaService.create(createMarcaDto);
  }

  @Put(':id')
  async update(@Param('id') id: int, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcaService.update(+id, updateMarcaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: int) {
    return this.marcaService.remove(+id);
  }
}
