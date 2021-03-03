import { Injectable } from '@nestjs/common';
import { TaskDTO } from 'src/dto/task.dto';

@Injectable()
export class TaskService {
    getTasks(): TaskDTO[] {
        return [
            {
                metaData: {
                    id: 1,
                    statusList: ['completed', 'incomplete'],
                },
                data: {
                    main: {

                        description: 'Create first task',
                        status: 'completed',
                    },
                    
                }
            },
            {
                metaData: {
                    id: 2,
                    statusList: ['completed', 'incomplete'],
                },
                data: {
                    main: {
                        description: 'Complete CRUD for tasks',
                        status: 'incomplete',
                    },
                    extra: {
                        until: 'End of March'
                    }
                    
                }
            }
        ]
    }
}
