import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import { pluginId } from '../../constants';
export const reactMarionetteWrapper = (rootId, _onShow?) => {

  return class extends Marionette.LayoutView<any> {


    getTemplate() {
      return _.template(`<div class=${pluginId}" id="${rootId}"></div>`);
    }

    onShow() {

      if (_onShow) {
        _onShow(rootId);
      }

    }

    onBeforeDestroy(){

      console.log(rootId);

      let firstChild = document.getElementById(rootId).firstElementChild;

      ReactDOM.unmountComponentAtNode(firstChild);

    }

  }
};