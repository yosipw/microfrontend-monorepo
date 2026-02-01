declare module 'mfeVue/App' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'mfeAngular/Component' {
  const AngularComponent: any;
  export default AngularComponent;
}