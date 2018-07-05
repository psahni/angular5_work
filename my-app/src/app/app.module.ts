import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { YouTubeSearchService } from './youtube-search/you-tube-search.service';
import { HttpModule } from '@angular/http';
import { youTubeSearchInjectables } from './youtube-search/you-tube-search.injectables';
import { ProfileService } from './profile/profile.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { ProfileComponent } from './profile/profile.component';
// Every component must be declared here.

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TodosComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    YoutubeSearchComponent,
    SearchComponentComponent,
    SearchResultComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',       component: HeroesComponent },
      { path: 'todos',  component: TodosComponent },
      { path: 'youtube', component: YoutubeSearchComponent},
      { path: 'profile-management', component: ProfileComponent }
    ])
  ],
  providers: [youTubeSearchInjectables, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
