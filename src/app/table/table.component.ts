import { Component, Input } from '@angular/core';
import { TableData } from './tableData.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CurrencyPipe],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input({ required: true }) tableData!: TableData[];
}
