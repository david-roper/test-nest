import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { updateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService: CoffeeService){

    }
    @Get()
    findAll(@Query() paginationQuery) {
        //const {limit, offset} = paginationQuery
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne (@Param('id') id: string){
        return this.coffeeService.findOne(id);
    }

    @Post()
    create(@Body('name') CreateCoffeeDto: CreateCoffeeDto){
        return this.coffeeService.create(CreateCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: updateCoffeeDto){
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeeService.remove(id);
    }

}