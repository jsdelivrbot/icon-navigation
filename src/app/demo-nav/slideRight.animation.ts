import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export function slideRight(timings = '250ms cubic-bezier(0.4, 0.0, 0.2, 1)') {
  return trigger('slide', [
    transition(':enter', [
      style({width: 0, opacity: 0, overflow: 'hidden'}),
      animate(timings, style({width: '*', opacity: 1})),
    ]),
    transition(':leave', [
      style({overflow: 'hidden'}),
      animate(timings, style({width: 0, opacity: 0})),
    ]),
  ]);
}