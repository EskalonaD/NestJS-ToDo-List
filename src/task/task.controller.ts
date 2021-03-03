import { Controller, Get } from '@nestjs/common';
import { TaskDTO } from 'src/dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private readonly taskService: TaskService,
    ) { }

    @Get('tasks')
    getTasks(): TaskDTO[] {
        return this.taskService.getTasks();
    }
}
