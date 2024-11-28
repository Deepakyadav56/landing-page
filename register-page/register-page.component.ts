import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiModuleModule } from '../../ui-module/ui-module.module';
import { RegisterService } from '../../../services/register.service';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [UiModuleModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  value!: string;
  value1!: string;
  registerations: any;
  registerService: any;


  constructor(private fb: FormBuilder ,private register:RegisterService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // confirmPassword: ['', Validators.required]
    });

   
      this.registeration();
    
  }

  // Convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  registeration() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
      this.registerService.register(this.registerForm.value).then((res: any) => {
        console.log('Response from service:', res.data);
        
      });
    } else {
      console.log('Invalid Form');
    }
  }

  // registeration(){
  //   this.registerService.register().then((res: any) => {
  //     console.log(res);
  //     console.log(res.data)
    
      
  //   });
  // }


}
