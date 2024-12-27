import { Component, EventEmitter, inject, Output } from '@angular/core';
import { InvestService } from '../services/invest.service';
import { TableData } from '../table/tableData.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  input1 = 0;
  input2 = 0;
  input3 = 0;
  input4 = 10;
  private investService = inject(InvestService);
  @Output() submitted = new EventEmitter<TableData[]>();

  onSubmit() {
    this.submitted.emit(this.investService.getResults(this.input1, this.input2, this.input3, this.input4));
    this.input1 = 0;
    this.input2 = 0;
    this.input3 = 0;
    this.input4 = 10;
  }
}
