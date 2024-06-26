import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { TabContainerComponent } from './tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    TwowaybindingComponent,
    NgTemplateComponent,
    TabContainerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
