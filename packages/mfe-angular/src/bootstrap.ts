import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';

let appRef: ApplicationRef | null = null;

export const mount = async (container: HTMLElement) => {
  try {
    console.log('Mounting Angular MFE...');
    appRef = await createApplication({
      providers: []
    });
    
    const componentRef = appRef.bootstrap(AppComponent);
    container.appendChild(componentRef.location.nativeElement);
    
    console.log('Angular MFE mounted successfully');
    return componentRef;
  } catch (err) {
    console.error('Error mounting Angular MFE:', err);
    throw err;
  }
};

export const unmount = () => {
  console.log('Unmounting Angular MFE...');
  if (appRef) {
    appRef.destroy();
    appRef = null;
  }
};

export default { mount, unmount };