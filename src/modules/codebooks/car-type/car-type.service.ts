import { Inject, Injectable } from '@nestjs/common';
import { CAR_TYPE_REPOSITORY } from 'src/core/constants';
import { CreateCarTypeDto } from './dto/create-car-type.dto';
import { UpdateCarTypeDto } from './dto/update-car-type.dto';
import { CarType } from './entities/car-type.entity';

@Injectable()
export class CarTypeService {
  constructor(@Inject(CAR_TYPE_REPOSITORY) private readonly carTypeRepository: typeof CarType) { }

  async create(carType): Promise<CarType> {
    return this.carTypeRepository.create<CarType>(carType)
  }

  async findAll(): Promise<CarType[]> {
    return this.carTypeRepository.findAll();
  }

  async findOne(id: number): Promise<CarType> {
    return await this.carTypeRepository.findOne({
      where: { id },
  });
  }

  update(id: number, updateCarTypeDto: UpdateCarTypeDto) {
    return `This action updates a #${id} carType`;
  }

  remove(id: number) {
    return `This action removes a #${id} carType`;
  }
}
