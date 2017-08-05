## Inject service into component

```
  @Component({
  ...
    providers: [App Service]
  })
  export class AppComponent implements OnInit{
    data = [];

    constructor( private appService: AppService){

    }

    ngOnInit()
    {
      data = this.appService.getData();
    }
  } 
```

## Hierarchical Injection
  App Module

  App 
  
  Component

## Inject service to service
```
  import { LoggingService } from './loggin.service'

  @Injectable()
  export class AccountService {
    constructor (private loggingService: LoggingService){
      
    }
  }

```

## Cross component communication
  Before using service, when select a recipe in recipe list, the path of communication is:
    recipe item -> recipe list -> recipes -> recipe detail
  
  By using service, the path changes to 
    recipe item -> recipes -> recipe detail