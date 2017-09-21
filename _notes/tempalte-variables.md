## Access html element in event handler 
``` 
$event.target.value
```

## Use template variable
Template 
``` 
  <input #email (keyup.enter)="onKeyUp(email.value)">
```
class
```
  onKeyUp(email)
  {
    
  }
```

