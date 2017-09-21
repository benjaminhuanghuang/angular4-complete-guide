## Property binding, bind data to property of DOM object
```
<h1 [textContent]= "title">
<h1 {{title}}}></h2>

<img [src]= "imageUrl"/>
<img src="{{src}}"}/>

```


## Attribute binding
Not each html attribute has corresponding dom property

```
<td [attr.colspan]="colSpan">
```

## Two way binding
```
imports FormModel in app.module

<input [(ngModel)]="email">
```
