## Operate native element
```
  <p basicHighlight> Style me with basic directive</p>

  @Directive({
    selector:"[basicHighlight]"
  })
  export class BasicHighlightDirective implements OnInit {
    constructor( private elementRef: ElementRef){
    }

    ngOnInit(){
      this.elementRef.nativeElement.style.backgroundColor='green';
    }
  }

```

## Using render 
```
    constructor( private elementRef: ElementRef, private render:Renderer2){
    }

    ngOnInit(){
      this.render.setStyle(this.elementRef, 'background-color', 'blue')
    }
```

## HostListener('event')
  @HostListener('mouseenter') mouseover (eventData: Event)
  {

  }
## HostBinding
  @HostBinding('style.backgroundColor') background: string;
  
  background = 'transparent'