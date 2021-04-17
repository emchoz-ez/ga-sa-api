import { Module } from '@nestjs/common';
import { CarTypeService } from './car-type.service';
import { CarTypeController } from './car-type.controller';
import { carTypesProviders } from './car-type.provider';

@Module({
  controllers: [CarTypeController],
  providers: [CarTypeService, ...carTypesProviders]
})
export class CarTypeModule {}
