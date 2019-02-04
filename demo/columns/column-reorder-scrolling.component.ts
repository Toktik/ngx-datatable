import { Component } from '@angular/core';

@Component({
  selector: 'column-reorder-scrolling-demo',
  styles: [ `
    .icon {
      position:absolute;
    }
    .datatable-icon-down {
      top: 0px;
    }
    .datatable-icon-up {
      top: 40px;
    }
    .dragFromLeft .icon {
      left:-13px;
    }
  `],
  template: `
    <div style="width: 500px">
      <h3>
        Reorder Column with Horizontal Scrolling
      </h3>
      <ngx-datatable
        class="bootstrap"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [reorderable]="reorderable"
        [swapColumns]="swapColumns"
        [scrollbarH]="true"
        [targetMarkerTemplate]="targetMarkerTemplate">
      </ngx-datatable>
      <ng-template #targetMarkerTemplate let-class="class">
        <div [ngClass]="class">
          <div class="icon datatable-icon-down"></div>
          <div class="icon datatable-icon-up"></div>
        </div>
      </ng-template>
    </div>
  `
})
export class ColumnReorderHorizontalScrollComponent {

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  swapColumns: boolean = false;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company', sortable: false }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
