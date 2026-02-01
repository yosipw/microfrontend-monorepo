export interface MicroFrontendApp {
  mount: (container: HTMLElement) => void;
  unmount: () => void;
}

declare global {
  interface Window {
    MfeVue?: MicroFrontendApp;
    MfeAngular?: MicroFrontendApp;
    [key: string]: any;
  }
}