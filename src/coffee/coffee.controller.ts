import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

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
    create(@Body('name') body){
        return this.coffeeService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.coffeeService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeeService.remove(id);
    }

}