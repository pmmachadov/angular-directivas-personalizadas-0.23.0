import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges { //OnChanges es para detectar cambios en los inputs de la directiva y OnInit es para detectar cuando se crea la directiva en el template del componente agregar.component.html y poder manipular el elemento html que tenga la directiva error-msg

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje( valor: string ) { //Este input se usa para cambiar el valor del mensaje de la directiva
    this._mensaje = valor;  //El valor del input mensaje se asigna a la variable _mensaje
    this.setMensaje();  //Este metodo se ejecuta cuando se crea la directiva y cuando se cambia el valor del input mensaje
  }

  @Input() set valido( valor: boolean ) {
    if( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
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

  ngOnInit(): void {

    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {  //Este metodo se ejecuta cuando se crea la directiva y cuando se cambia el valor del input mensaje
    this.htmlElement.nativeElement.innerText = this._mensaje; //innerText es para obtener el texto del elemento html
  }

}
