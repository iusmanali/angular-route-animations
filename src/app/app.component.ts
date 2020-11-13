import { Component } from '@angular/core';
import { trigger, query, transition, style, animate, state, group } from '@angular/animations';
import { AnimationService } from './common/animation.service';
import { slideToLeft, slideToRight, slideToTop, slideToBottom } from './common/animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeTransition', [
      transition("* => slideToLeft", slideToLeft),
      transition("* => slideToRight", slideToRight),
      transition("* => slideToTop", slideToTop),
      transition("* => slideToBottom", slideToBottom),
      transition("* => slideToLeftDuplicate", slideToLeft),
      transition("* => slideToRightDuplicate", slideToRight),
      transition("* => slideToTopDuplicate", slideToTop),
      transition("* => slideToBottomDuplicate", slideToBottom),
    ])
  ],
})
export class AppComponent {
  title = 'angular-animtions';
  constructor(private router: Router, private animationService: AnimationService) { }
  getAnimation() {
    console.log(this.animationService.getCurrentAnimation());
    return this.animationService.getCurrentAnimation();
  }

  RouteToPage(pageID: number) {
    switch (pageID) {
      case 2:
        this.animationService.slideToRIGHT();
        this.router.navigateByUrl("home");
        break;
      case 3:
        this.animationService.slideToLEFT();
        this.router.navigateByUrl("about");
        break;
      case 4:
        this.animationService.slideToTOP();
        this.router.navigateByUrl("contact");
        break;
      default:
        break;
    }
  }
}


