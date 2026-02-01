import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrapAngular = () => {
    if (environment.production) {
        enableProdMode();
    }

    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => console.error(err));
};

if (window['angularMicrofrontend']) {
    window['angularMicrofrontend'].bootstrap = bootstrapAngular;
} else {
    bootstrapAngular();
}