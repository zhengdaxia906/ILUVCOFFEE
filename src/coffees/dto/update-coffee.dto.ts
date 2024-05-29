import { PartialType } from '@nestjs/mapped-types'; //将其中属性都转为可选
import { CreateCoffeeDto } from './create-coffee.dto';
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
