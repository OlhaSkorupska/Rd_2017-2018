import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.scss']
})
export class PurchaseItemComponent {
  @Input() ingridient: string;
}
