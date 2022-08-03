import { getManifest, Manifest } from '@angular-architects/module-federation';
import { loadManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadManifestService } from './services/load-mfe-manifest.service';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];

  constructor(
    private router: Router,
    private loadManifestService: LoadManifestService
  ) {}

  async ngOnInit(): Promise<void> {
    debugger;
    // Hint: Move this to an APP_INITIALIZER
    //  to avoid issues with deep linking

    const manifest = getManifest<CustomManifest>();
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
    this.remotes = Object.values(manifest);

    // this.loadManifestService
    //   .getManifestConfig()
    //   .subscribe((manifest: CustomManifest) => {
    //     debugger;
    //     loadManifest('file_path')
    //       .catch((err) => console.error(err))
    //       .then((_) => {
    //         const routes = buildRoutes(manifest);
    //         this.router.resetConfig(routes);

    //         this.remotes = Object.values(manifest);
    //       })
    //       .catch((err) => console.error(err));
    //   });
  }
}
