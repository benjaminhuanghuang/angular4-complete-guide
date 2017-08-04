## Raise featureSelected event in header
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

## user ng-if in app