import { NgModule } from '@angular/core';

// Wczytaj moduł zawierający podstawowe dyrektywy.
import { CommonModule } from '@angular/common';

import { TaskList } from './task-list';
import { Task } from './task/task';


// Utwórz moduł listy zadań.
@NgModule({
    declarations: [TaskList, Task],
    imports: [CommonModule],
    exports: [TaskList]
})
export class TaskListModule {}