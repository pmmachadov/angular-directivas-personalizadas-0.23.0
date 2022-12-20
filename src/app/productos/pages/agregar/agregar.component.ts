import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto1: string = 'Fernando Herrera';
  color : string = 'green';

  miFormulario: FormGroup = this.fb.group({ //Con el formBuilder no necesito el ngOnInit para inicializar el formulario porque ya lo hace el formBuilder. Esta linea ejecuta el constructor del formBuilder y me devuelve un FormGroup
    nombre: ['', Validators.required ] //El primer argumento es el valor por defecto y el segundo argumento es un array de validadores
  });

  constructor( private fb: FormBuilder ) { } //Inyectamos el formBuilder

  tieneError( campo: string ): boolean {  //Valida el campo nombre del formulario. Si el campo nombre es invalido, retorna true, de lo contrario retorna false
    return this.miFormulario.get(campo)?.invalid || false;  //El signo de interrogacion es para que no de error si el campo no existe
  }


  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}


// FormControlName es una directiva que se usa para vincular un elemento del formulario con un campo del FormGroup. Es decir, vincula el input con el campo nombre del FormGroup. En este caso, el FormControlName se usa en el input del nombre del producto y para el textarea de la descripcion del producto.
