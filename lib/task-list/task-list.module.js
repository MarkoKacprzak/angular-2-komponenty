import { NgModule } from '@angular/core';

// Wczytaj moduł zawierający podstawowe dyrektywy.
import { CommonModule } from '@angular/common';

import { TaskList } from './task-list';


// Utwórz moduł listy zadań.
@NgModule({
    declarations: [TaskList],
    imports: [CommonModule],
    exports: [TaskList]
})
export class TaskListModule {}