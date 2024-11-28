import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiModuleModule } from '../../ui-module/ui-module.module';
import { PasswordModule } from 'primeng/password';
import { LoginService } from '../../../services/login.service';

import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { log } from 'node:console';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [UiModuleModule,PasswordModule,SplitButtonModule,DialogModule,MenubarModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  items!: MenuItem[];

  title='hello Workhhjkh';
  loginForm!: FormGroup;
  data:any;
  isDisabled:boolean=true;
  isActive:boolean=true;
  isinactive:boolean=false;
  Imagemainpage:string='/assets/airobot.png';
  imageURL:string=' /assets/airobot.png';
  maskimage:string='/assets/logo.png';
  secondmaskimage='/assets/redblackrobot.png';
  // value!: string;
  // loginService: any;
  loginData: any = null;
  showCard: boolean=true;
  isFlipped: boolean = false;

  constructor(private fb: FormBuilder,private loginService:LoginService) {}

  buttonClick(){
    console.log('Button click')
  }
  CancelButton(){
    this.loginForm.reset();
    console.log('Helloijhikjhlkhjkhk')

  }
  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  // message: string | undefined;
  newmessage:string|undefined;

  submitWork(): void {
    this.message = 'Work is submitted';
    this.newmessage='Submited Succesfully'
  }
  cards = [
    { title: 'Card 1', number: '1234 5678 9012 3456', name: 'John Doe', expiry: '12/23' },
    { title: 'Card 2', number: '2345 6789 0123 4567', name: 'Jane Doe', expiry: '11/22' },
    { title: 'Card 3', number: '3456 7890 1234 5678', name: 'Jim Doe', expiry: '10/21' },
    { title: 'Card 4', number: '4567 8901 2345 6789', name: 'Jill Doe', expiry: '09/20' }
  ];


  onClick(): void {
    console.log('Button clicked!');
  }

  toggleCard(){
    this.showCard=!this.showCard;
  }


  display: boolean = false;

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    this.hideDialog();
  }


  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    this.loginpage();
    // this.kitchenpage();
    this.kitchenset();
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  loginpage() {
    if (this.loginForm.valid) {
      // Implement your login logic here, e.g., send login request
      console.log('Form Submitted:', this.loginForm.value);

      this.loginService.login(this.loginForm.value).then((res:any)=>{
        console.log(res);
        this.loginData=res.data;
        
      }) .catch((err:any)=> {
        console.error('Error From Service');
      });
    } else {
      console.log('Invalid Form');
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        if (control) {
          control.markAsTouched({ onlySelf: true });
        }
      });
    
    }
  }


  // kitchenpage():void{
  //   this.loginService.kitchen().then((res:any)=>{
  //     console.log(res);
  //   })
  // }

  // kitchenpage(): void {
  //   this.loginService.kitchen('').then((res: any) => {
  //     console.log(res.data);
  //   }).catch((error: any) => {
  //     console.error(error);
  //   });
  // }

  kitchenset(){
    this.loginService.kitchensecond().then((res:any)=>{
      console.log(res.data.headers);
    })
  }

  // googleuser(){
  //   this.loginService.googleurl().then((res:any)=>{
  //     console.log(res.data)
  //   })
  // }


  save(severity: string) {
    // this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
}
    
}
