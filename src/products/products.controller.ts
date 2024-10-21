import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common';

@Controller('products')
export class ProductsController 
{
  constructor(private readonly productsService: ProductsService) {}


  //create a product
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }


  //get all products
  @Get()
  findAll(@Query() paginationDto : PaginationDto) 
  {
    return this.productsService.findAll(paginationDto);
  }


  //get info of one product
  @Get(':id')
  findOne(@Param('id') id: string) 
  {
    return this.productsService.findOne(+id);
  }


  //update product by id
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) 
  {
    return this.productsService.update(id, updateProductDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
