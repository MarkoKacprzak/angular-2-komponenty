﻿import { Component, Input, ViewEncapsulation } from '@angular/core';
import template from './task.html!text';
@Component({
    selector: 'ngc-task',
    host: {
        class: 'task'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Task {
    @Input() task;
}