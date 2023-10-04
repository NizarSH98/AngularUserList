import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() Even: number = 0;
  @Input() Odd: number = 0;


  selectedRadioButton: string = "All";

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
    //console.log(this.selectedRadioButton);
  }
}
