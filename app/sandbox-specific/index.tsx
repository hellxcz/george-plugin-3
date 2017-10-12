import * as React from 'react';

import './styles/george.less';


import { MenuItemModel } from './adapter/menuItemModel';

import {
  getExtendedTransaction,
  init
} from '../apiClient';


import {
  getApiUrl,
  getAuthorizationHeader
} from './adapter/georgeAPI';


import { reactMarionetteWrapper } from './adapter/backboneHelpers/reactMarionetteWrapper';
import { render } from './adapter/reactHelpers/index';
import {
  pluginName,
  getId,
} from './constants';
import { Transaction } from '../apiClient/dtos';
import {
  pluginInitialized
} from '../runtime/index';




export default () => {

  george.app.module(pluginName, {
    define: function (testApp) {

      this.addInitializer((opts) => {

        init(
          getApiUrl(),
          {
            Authorization: getAuthorizationHeader()
          }
        );

        pluginInitialized();

      });

      this.onPluginActivation = () => {

        console.log('plugin activation');

      };

      this.onPluginDeactivation = () => {
        console.log('plugin de-activation');

      };

    },

  });
};
