import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GamesService } from '../../shared/service/games.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [GamesService],
  declarations: [GamesComponent, ModalDetailComponent ],
  entryComponents: [ModalDetailComponent]
})
export class GamesModule { }
