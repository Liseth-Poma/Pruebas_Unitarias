import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PruebasComponent } from './pruebas.component';

describe('PruebasComponent', () => {
  let component: PruebasComponent;
  let fixture: ComponentFixture<PruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasComponent, ReactiveFormsModule], // Importa PruebasComponent y ReactiveFormsModule
    }).compileComponents();

    fixture = TestBed.createComponent(PruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form', () => {
    expect(component.studentForm).toBeTruthy();
  });

  it('should check name field validity', () => {
    let name = component.studentForm.controls['name'];
    expect(name.valid).toBeFalsy();
    
    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

    name.setValue('John Doe');
    expect(name.valid).toBeTruthy();
  });

  it('should check email field validity', () => {
    let email = component.studentForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

    email.setValue('notanemail');
    expect(email.hasError('email')).toBeTruthy();

    email.setValue('test@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('should check age field validity', () => {
    let age = component.studentForm.controls['age'];
    expect(age.valid).toBeFalsy();

    age.setValue('');
    expect(age.hasError('required')).toBeTruthy();

    age.setValue(17);
    expect(age.hasError('min')).toBeTruthy();

    age.setValue(18);
    expect(age.valid).toBeTruthy();
  });

  it('should check the submit button is disabled if the form is invalid', () => {
    component.studentForm.controls['name'].setValue('');
    component.studentForm.controls['email'].setValue('');
    component.studentForm.controls['age'].setValue('');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTruthy();

    component.studentForm.controls['name'].setValue('John Doe');
    component.studentForm.controls['email'].setValue('test@example.com');
    component.studentForm.controls['age'].setValue(18);
    fixture.detectChanges();

    expect(button.disabled).toBeFalsy();
  });

  it('only submit when form is valid', () => {
    spyOn(console, 'log');  // Espía la función console.log para verificar si es llamada
  
    // Prueba con el formulario inválido
    component.studentForm.controls['name'].setValue('');
    component.studentForm.controls['email'].setValue('');
    component.studentForm.controls['age'].setValue('');
    component.onSubmit();
    expect(console.log).not.toHaveBeenCalled();  // No debe llamarse console.log cuando el formulario es inválido
  
    // Prueba con el formulario válido
    component.studentForm.controls['name'].setValue('John Doe');
    component.studentForm.controls['email'].setValue('test@example.com');
    component.studentForm.controls['age'].setValue(18);
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Form Submitted!', component.studentForm.value);  // Debe llamarse console.log cuando el formulario es válido
  });
  
});
