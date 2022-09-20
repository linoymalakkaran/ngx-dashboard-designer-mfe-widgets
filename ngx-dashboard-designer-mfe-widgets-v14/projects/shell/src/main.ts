import { loadManifest } from '@angular-architects/module-federation';

loadManifest("/ATLP/EN/DASHBOARD/WIDGETS/SHELL/assets/mf.manifest.json")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));

// import('./bootstrap').catch((err) => console.error(err));
