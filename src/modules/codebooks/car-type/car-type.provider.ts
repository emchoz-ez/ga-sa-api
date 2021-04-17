import { CarType } from './entities/car-type.entity';
import { CAR_TYPE_REPOSITORY } from '../../../core/constants';

export const carTypesProviders = [{
    provide: CAR_TYPE_REPOSITORY,
    useValue: CarType,
}];