import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/services/servicesFormulario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daniel-projeto';

  form: FormGroup;

  constructor(public formBuilder: FormBuilder, private formularioSerive: FormularioService, private rota: Router) {

    this.form = this.formBuilder.group({

      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      data: [''],
      cidade: [''],
      estado: [''],
      endereco: ['', [Validators.required]]
    })



  }

  salvarForm() {    
    
    this.formularioSerive.salvarFormulario(this.form.value)
    .subscribe(data => {          
      console.log(data);
      alert("Formulario enviado.");
    });     
    this.form.reset(); 
    
  }
}
