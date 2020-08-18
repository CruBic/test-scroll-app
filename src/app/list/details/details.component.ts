import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/state/app.state';
import { selectCurrentElement } from '@store/selectors/element.selectors';
import { PeriodicElement } from '@store/models/element';
import { Observable, Subject } from 'rxjs';
import { navigateToList } from '@store/actions/navigation.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  public element$: Observable<PeriodicElement>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.element$ = this.store.select(selectCurrentElement);
  }

  public goToList(symbol: string): void {
    this.store.dispatch(navigateToList({payload: symbol}));
  }
}
