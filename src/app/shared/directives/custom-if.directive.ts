import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({  //La directiva customIf se usa para mostrar u ocultar un elemento html
  selector: '[customIf]'  //El selector de la directiva customIf es customIf
})
export class CustomIfDirective {  //La directiva customIf se usa para mostrar u ocultar un elemento html

  @Input() set customIf( condicion: boolean ) { //El input customIf se usa para mostrar u ocultar un elemento html
    if ( condicion ) {  //Si el valor del input customIf es true, se muestra el elemento html
      this.viewContainer.createEmbeddedView( this.templateRef );  //createEmbeddedView es para crear una vista embebida en el elemento html que tenga la directiva customIf
    } else {  //Si el valor del input customIf es false, se oculta el elemento html
      this.viewContainer.clear(); //clear es para limpiar el elemento html que tenga la directiva customIf
    }
  }

  constructor(  //Inyectamos el TemplateRef y el ViewContainerRef para poder manipular el elemento html que tenga la directiva customIf
    private templateRef: TemplateRef<HTMLElement>,  //TemplateRef es para obtener la referencia al template del elemento html que tenga la directiva customIf
    private viewContainer: ViewContainerRef //ViewContainerRef es para obtener la referencia al elemento html que tenga la directiva customIf
  ) {}


}
