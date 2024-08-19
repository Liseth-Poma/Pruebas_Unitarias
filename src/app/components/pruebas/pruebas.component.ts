import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.scss'
})
export class PruebasComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log('Form Submitted!', this.studentForm.value);
    }
  }
}