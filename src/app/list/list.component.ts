import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PeriodicElement } from '@store/models/element';
import { Store } from '@ngrx/store';
import { AppState } from '@store/state/app.state';
import { selectElements } from '@store/selectors/element.selectors';
import { ElementState } from '@store/state/element.state';
import { loadElements, setPager } from '@store/actions/element.actions';
import { navigateToDetails, scrollToElement } from '@store/actions/navigation.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = new MatTableDataSource<PeriodicElement>();
  public pageIndex = 0;
  private unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadElements());
    this.store.select(selectElements).pipe(takeUntil(this.unsubscribe$)).subscribe((state: ElementState) => {
      this.dataSource.data = state.list;
      if (state.pager) {
        this.pageIndex = state.pager;
      }

    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.page.pipe(takeUntil(this.unsubscribe$)).subscribe((page: PageEvent) => this.pageIndex = page.pageIndex);
    this.store.dispatch(scrollToElement());
  }

  public goToDetails(symbol: string): void {
    this.store.dispatch(setPager({payload: this.pageIndex}));
    this.store.dispatch(navigateToDetails({payload: symbol}));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
