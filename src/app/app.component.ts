import { ApplicationRef, Component } from '@angular/core';
import { LogUpdateService } from './log-update.service';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private logService: LogUpdateService, private appRef: ApplicationRef, private updates: SwUpdate) { }

  ngOnInit(): void {
    this.logService.init();
    
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate()
    );
  }
    
  title = 'Week12';
}
