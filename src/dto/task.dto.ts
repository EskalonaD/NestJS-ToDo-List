export class TaskDTO {
    metaData: {
        id: number;
        statusList: string[];
    };
    data: {
        main: {
            description: string;
            status: string;
        },
        extra?: {
            [key: string]: any;
        },
    }
}