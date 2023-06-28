import { Component, OnInit } from '@angular/core';
import { COLORS } from '../../globals/variables';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading = true;

  mycolor = 'red';

  spinnerStyle() {
    color: COLORS.blue20;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
