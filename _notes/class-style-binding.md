## Class binding
when isActive is true, class 'active' will be added to button
```
<button class= "btn" [class.active]="isActive"/>
```


## Style binding
Use style conditionally
```
<button class= "btn" [style.backgroundColor]="isActive?'blue':'white'"/>
```

