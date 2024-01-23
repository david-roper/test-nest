import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "../create-coffee.dto/create-coffee.dto";

export class updateCoffeeDto extends PartialType(CreateCoffeeDto){

}
