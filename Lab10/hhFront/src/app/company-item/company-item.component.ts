import { Component, Input } from '@angular/core';
import { Company } from '../models';
@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent {
  @Input() company!: Company;
}
