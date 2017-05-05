import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app'
// Aplikacja wykorzystuje dyrektywę TaskList jako część modułu.
import { TaskListModule } from './task-list/task-list.module';
@NgModule({
    declarations: [App],
    imports: [BrowserModule, TaskListModule],
    bootstrap: [App]
})
export class AppModule {}