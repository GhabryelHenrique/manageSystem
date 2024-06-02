import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: [""],
    });
  }

  ngOnInit() {}

  editTask() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tarefa criada com sucesso' });
    this.router.navigate(["/todo"]);
  }

}
