import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Decorador directive que le da a la clase de nuestra directiva todas las capacidades de las directivas de Angular
@Directive({
  selector: '[appResaltar]',
/*   standalone: true */
})
export class ResaltarDirective {



  @Input() colorBase:string = ''
  @Input('colorMaxi') colorEspecial:string = ''
  @Input() appResaltar:string = ''

  // Al usar la directiva es como si hiciera un new (Se crea la instancia y se ejecutar el constructor)
  constructor(private el:ElementRef) {
    console.warn('constructor ResaltarDirective', el)
  }

  // Decorador para darle la capacidad al método onMouseEnter para que este atento a el mouse enter
  @HostListener('mouseenter') onMouseEnter() {
    //console.log('Pasaron por arriba')
    //this.el.nativeElement.style.backgroundColor= 'green'
    // console.log(this.colorBase)
    //this.el.nativeElement.style.backgroundColor= this.colorBase
    //this.el.nativeElement.style.color = 'black'
    this.resaltar(this.colorBase, 'black')
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this.el.nativeElement.style.backgroundColor = 'blue'
    //this.el.nativeElement.style.color = 'white'
    this.resaltar('blue', 'white')
  }

  private resaltar(colorBase:string, colorTexto:string) {
    this.el.nativeElement.style.backgroundColor = colorBase || this.appResaltar || this.colorEspecial
    this.el.nativeElement.style.color = colorTexto
    this.el.nativeElement.style.border = '5px solid black'
  }


}
