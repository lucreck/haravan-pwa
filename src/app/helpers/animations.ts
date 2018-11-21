import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const fakeLoading =  trigger('fakeLoad', [
    state('start', style({
      left: '-100%'
    })),
    state('end', style({
     left: '100%'
    })),
    // animate format: 'DURATION [DELAY] EASING-FUNCTION'
    transition('start => end', [
      animate("700ms")
    ]),
    transition('* => loop-state', [
      style({
        left: '-100%'
      }),
      animate('1200ms', style({
        left: '100%'
      })),
      animate('1ms', style({
        left: '-100%'
      })),
      animate('1200ms', style({
        left: '100%'
      })),
      animate('1ms', style({
        left: '-100%'
      })),
      animate('1200ms', style({
        left: '100%'
      })),
      animate('1ms', style({
        left: '-100%'
      })),
      animate('1200ms', style({
        left: '100%'
      })),
      animate('1ms', style({
        left: '-100%'
      })),
      animate('1200ms', style({
        left: '100%'
      }))
    ]),
  ])