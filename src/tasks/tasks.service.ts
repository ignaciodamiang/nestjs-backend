import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'This is task 1',
      status: TaskStatus.PENDING,
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'This is task 2',
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'This is task 3',
      status: TaskStatus.DONE,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
}
