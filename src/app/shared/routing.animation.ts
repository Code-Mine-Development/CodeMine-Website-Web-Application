// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [

  // route 'enter' transition
    transition(':enter', [
      // css styles at start of transition
      style({ opacity: 0 }),
      // animation and styles at end of transition
      animate('.3s ease-in', style({ opacity: 1 }))
    ])
  ]);
