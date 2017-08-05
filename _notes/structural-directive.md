##
```
  <div *ngIf="">
```
Equals to 

```
  <ng-template [ngIf]="">
    <div>
    </div>
  </ng-template>
```

## Implementation
```
  <div *appUnless> 
  
  </div>

  @Directive({
    selector:"[appUnless]"
  })
  export class BasicHighlightDirective implements OnInit {
    constructor( private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){
    }

    @Input() set appUnless(condition: boolean){
      if (!condition)
      {
        this.vcRef.createEmbeddedView(this.templateRef);
      }
      else
      {
        this.vcRef.clear();
      }
    }
  }

```