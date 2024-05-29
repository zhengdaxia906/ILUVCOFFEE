import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entitiy';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '0',
      name: 'coffee1',
      brand: 'zxf',
      flavors: ['choclate', 'vanilla'],
    },
  ];
  findAll() {
    return this.coffees;
  }

  findById(id: any) {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee)
      throw new HttpException(`Coffee${id} is not found`, HttpStatus.NOT_FOUND);

    return coffee;
  }
  create(data: any) {
    this.coffees.push(data);
    return data;
  }

  update(id: string, body: any) {
    const coffee = this.findById(id);
    if (coffee) console.log(id, body);
  }

  remove(id: string) {
    const index = this.coffees.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.coffees.splice(index, 1);
    }
  }
}
