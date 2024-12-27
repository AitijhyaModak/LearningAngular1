import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { TableData } from './table/tableData.model';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent, TableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  tableData: TableData[] = [];

  onSubmit(data: TableData[]) {
    this.tableData = data;
  }
}
