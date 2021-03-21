import { Injectable, Inject } from '@nestjs/common';
import { Car } from './car.entity';
import { CarDto } from './dto/car.dto';
import { CAR_REPOSITORY } from '../../core/constants';

@Injectable()
export class CarsService {
    constructor(@Inject(CAR_REPOSITORY) private readonly carRepository: typeof Car) { }

    async create(car): Promise<Car> {
        return await this.carRepository.create<Car>(car);
    }

    async findAll(): Promise<Car[]> {
        return await this.carRepository.findAll<Car>();
    }

    async findOne(id): Promise<Car> {
        return await this.carRepository.findOne({
            where: { id },
        });
    }

    async delete(id) {
        return await this.carRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedCar]] = await this.carRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedCar };
    }
}