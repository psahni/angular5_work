/*

@Component({
  template: `
    <button (click)="add()">Add</button>
    <app-list [items$]="items$"></app-list>
  `
})
export class AppComponent {
  items = [];
  items$ = new BehaviorSubject(this.items);

  add() {
    this.items.push({ title: Math.random() })
    this.items$.next(this.items);
  }
}

@Component({
  template: `
     <div *ngFor="let item of items">{{item.title}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() items: Observable<Item>;
  _items: Item[];

  ngOnInit() {
    this.items.subscribe(items => {
      this._items = items;
    });
  }

}
*/