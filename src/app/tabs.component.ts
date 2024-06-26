import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: 'tabs',
  template: `
  <ul class="nav">
   
  <li class="nav-item" *ngFor="let link of navs">
    <a class="nav-link active" href="#">
      <ng-container *ngIf="linkTemplate;else noTemplate" >
    <ng-template *ngTemplateOutlet="linkTemplate;context:{link:link}"></ng-template>
      </ng-container>
      <ng-template #noTemplate>
        {{link}}
      </ng-template>
    </a>
  </li>
  
</ul>
  `,
})
export class TabContainerComponent {
  @Input() navs: string[] | undefined;
  @Input() linkTemplate: TemplateRef<any> | undefined; // Custom template provided by parent
}