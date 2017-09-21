## Event bubbling
There will be two event
```
<div (click)="onDivClicked()">
  <button (click)="onButtonClicked()">
</div>
```
Stop bubbling
```
$event.stopPropagation();
```

## Event filter
```
<input (keyup.enter)="onEnter()">
```
