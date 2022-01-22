import { Router, Utils } from '@lightningjs/sdk';

import routes from './lib/routes';
import { Menu } from './widgets';

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Nexa-Bold.otf') }]
  }

  static colors() {
    return Utils.asset('colors.json')
  }

  _setup() {
    Router.startRouter(routes, this);
  }

  static _template() {
    return {
      ...super._template(),
      Widgets: {
        Menu: {
          type: Menu
        },
      }
    }
  }


}
