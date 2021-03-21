import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CarsService } from './cars.service';
import { Car as CarEntity } from './car.entity';
import { CarDto } from './dto/Car.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService) { }

    @Get()
    async findAll() {
        // get all Cars in the db
        return await this.carService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CarEntity> {
        // find the Car with this id
        const Car = await this.carService.findOne(id);

        // if the Car doesn't exit in the db, throw a 404 error
        if (!Car) {
            throw new NotFoundException('This Car doesn\'t exist');
        }

        // if Car exist, return the Car
        return Car;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() Car: CarDto): Promise<CarEntity> {
        // create a new Car and return the newly created Car
        return await this.carService.create(Car);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() car: CarDto): Promise<CarEntity> {
        // get the number of row affected and the updated Car
        const { numberOfAffectedRows, updatedCar } = await this.carService.update(id, car);

        // if the number of row affected is zero, 
        // it means the Car doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Car doesn\'t exist');
        }

        // return the updated Car
        return updatedCar;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number) {
        // delete the Car with this id
        const deleted = await this.carService.delete(id);

        // if the number of row affected is zero, 
        // then the Car doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Car doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
}