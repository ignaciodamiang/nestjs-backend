import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  private _tasksService: TasksService;
  constructor(_tasksService: TasksService) {
    this._tasksService = _tasksService;
  }

  @Get()
  getAllTasks() {
    return this._tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this._tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this._tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this._tasksService.updateTask(id, updatedFields);
  }
}
