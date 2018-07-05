
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from '../search-result/search-result.model';
import { YouTubeSearchService } from '../youtube-search/you-tube-search.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-search-component',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`,
  styleUrls: ['./search-component.component.css']
})

/* The Search Box Component */
export class SearchComponentComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {}

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter((text: string) => text.length > 1 )
    .debounceTime(250)
    .do(() => this.loading.emit(true))
    .map((query: string) => this.youtube.search(query))
    .switch()
    .subscribe((results: SearchResult[]) => {       // Subscribe takes three arguments: onSuccess, onError, onCompletion
      this.loading.emit(false);
      this.results.emit(results);
    },
    (error: any) => {
      console.log('error = ', error);
    }, () => {
      this.loading.emit(false);
    });
  }
}
