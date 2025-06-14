import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {}

    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() createCouseDTO: CreateCourseDTO) {
        return this.courseService.create(createCouseDTO);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCourseDTO: UpdateCourseDTO) {
        return this.courseService.update(id, updateCourseDTO);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: number){
        return this.courseService.remove(id);
    }
}
