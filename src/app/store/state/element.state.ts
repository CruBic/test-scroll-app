import { PeriodicElement } from '@store/models/element';

export interface ElementState {
  list: PeriodicElement[];
  pager: number;
  currentElementSymbol: string;
}

export const initialElementState: ElementState = {
  list: [],
  pager: 0,
  currentElementSymbol: '',
};

export function getInitialElementState(): ElementState {
  return initialElementState;
}
