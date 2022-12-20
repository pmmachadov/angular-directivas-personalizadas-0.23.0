import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({  //La directiva error-msg se usa para mostrar un mensaje de error en un elemento html
  selector: '[error-msg]' //El selector de la directiva error-msg es error-msg
})
export class ErrorMsgDirective implements OnInit, OnChanges { //OnChanges es para detectar cambios en los inputs de la directiva y OnInit es para detectar cuando se crea la directiva en el template del componente agregar.component.html y poder manipular el elemento html que tenga la directiva error-msg

  private _color: string = 'red'; //Este input se usa para cambiar el color del mensaje de la directiva
  private _mensaje: string = 'Este campo es requerido'; //Este input se usa para cambiar el valor del mensaje de la directiva

  htmlElement: ElementRef<HTMLElement>; //Inyectamos el ElementRef para poder manipular el elemento html que tenga la directiva error-msg en el template del componente agregar.component.html

  @Input() set color( valor: string) {  //Este input se usa para cambiar el color del mensaje de la directiva
    this._color = valor;  //El valor del input color se asigna a la variable _color
    this.setColor();  //Este metodo se ejecuta cuando se crea la directiva y cuando se cambia el valor del input color
  }

  @Input() set mensaje( valor: string ) { //Este input se usa para cambiar el valor del mensaje de la directiva
    this._mensaje = valor;  //El valor del input mensaje se asigna a la variable _mensaje
    this.setMensaje();  //Este metodo se ejecuta cuando se crea la directiva y cuando se cambia el valor del input mensaje
  }

  @Input() set valido( valor: boolean ) { //Este input se usa para mostrar u ocultar el mensaje de la directiva
    if( valor ) { //Si el valor del input valido es true, se oculta el mensaje de la directiva
      this.htmlElement.nativeElement.classList.add('hidden'); //classList es para obtener la lista de clases del elemento html. add es para agregar una clase al elemento html
    } else {  //Si el valor del input valido es false, se muestra el mensaje de la directiva
      this.htmlElement.nativeElement.classList.remove('hidden');  //classList es para obtener la lista de clases del elemento html. remove es para remover una clase del elemento html
    }
  }

  constructor( private el: ElementRef<HTMLElement>  ) { //Inyectamos el ElementRef para poder manipular el elemento html que tenga la directiva error-msg en el template del componente agregar.component.html
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {

    // if ( changes.mensaje ) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if ( changes.color ) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log(changes)

  }

  ngOnInit(): void {  //Este metodo se ejecuta cuando se crea la directiva en el template del componente agregar.component.html y poder manipular el elemento html que tenga la directiva error-msg

    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo(): void { // Establece el estilo del elemento html que tenga la directiva error-msg
    this.htmlElement.nativeElement.classList.add('form-text'); //classList es para obtener la lista de clases del elemento html. add es para agregar una clase al elemento html.
  }

  setColor(): void { //Establece el color del elemento html que tenga la directiva error-msg
    this.htmlElement.nativeElement.style.color = this._color; //style es para obtener el estilo del elemento html. color es para obtener el color del elemento html
  }

  setMensaje(): void { //Este metodo se ejecuta cuando se crea la directiva y cuando se cambia el valor del input mensaje
    this.htmlElement.nativeElement.innerText = this._mensaje; //innerText es para obtener el texto del elemento html
  }

}
