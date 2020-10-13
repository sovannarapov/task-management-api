import { TaskStatus } from '../tasks.enum';
export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
