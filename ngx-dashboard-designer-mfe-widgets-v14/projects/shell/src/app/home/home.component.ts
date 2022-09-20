import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef, static: false })
  viewContainer: ViewContainerRef | undefined;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadMfeWidget();
  }

  async loadMfeWidget(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry:
        'http://localhost:7287/EN/WIDGETS/dashboard-widgets/remoteEntry.js',
      // remoteEntry: "http://localhost:9203/ATLP/EN/DASHBOARD/WIDGETS/remoteEntry.js",
      exposedModule: './BarChartWidget',
    });
    const ref = this.viewContainer!.createComponent(
      m['BarchartWidgetComponent']
    );

    // const compInstance = ref.instance;
    setInterval(() => {
      this.ref.markForCheck();
    }, 1000);
  }
}
