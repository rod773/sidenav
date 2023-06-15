import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
