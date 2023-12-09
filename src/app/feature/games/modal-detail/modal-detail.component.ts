import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Detail } from '../../../shared/models/detail';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent implements OnInit {
  public detail: Detail;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Detail) { }

  ngOnInit() {
    this.detail = this.data;
  }

}
