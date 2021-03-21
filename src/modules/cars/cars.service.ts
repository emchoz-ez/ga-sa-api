import { Injectable, Inject } from '@nestjs/common';
import { Car } from './car.entity';
import { CarDto } from './dto/car.dto';
import { User } from '../users/user.entity';
import { CAR_REPOSITORY } from '../../core/constants';

@Injectable()
export class CarsService {
    constructor(@Inject(CAR_REPOSITORY) private readonly CarRepository: typeof Car) { }

    async create(car: CarDto): Promise<Car> {
        return await this.CarRepository.create<Car>();
    }

    async findAll(): Promise<Car[]> {
        return await this.CarRepository.findAll<Car>();
    }

    async findOne(id): Promise<Car> {
        return await this.CarRepository.findOne({
        	where: { id },
    	});
    }

    async delete(id) {
        return await this.CarRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedCar]] = await this.CarRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedCar };
    }
}