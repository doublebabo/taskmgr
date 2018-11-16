import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../../project/new-project/new-project.component';
import {NewTaskComponent} from '../new-task/new-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [{
    id: 1,
    name: '待办',
    tasks: [{
      id: 1,
      desc: '任务1：去辛巴克买杯咖啡----',
      owner: {
        id: 1,
        name: '张三',
        avatar: 'avatars:svg-11'
      },
      dueDate: new Date(),
    }]
  },
    {
      id: 2,
      name: '进行中',
      tasks: [{
        desc: '任务2：完成老板布置的 ppt 作业',
        owner: {
          id: 1,
          name: '李四',
          avatar: 'avatars:svg-12'
        },
        dueDate: new Date()
      }]
    }];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    this.dialog.open(NewProjectComponent);
  }

  addNewTask() {
    this.dialog.open(NewTaskComponent);
  }
}
