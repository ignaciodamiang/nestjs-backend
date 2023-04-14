import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';

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
}
