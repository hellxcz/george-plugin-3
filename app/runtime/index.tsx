import LayoutView = Marionette.LayoutView;
import { Transaction } from '../apiClient/dtos';
import { getExtendedTransaction } from '../apiClient/index';
import { reactMarionetteWrapper } from '../sandbox-specific/adapter/backboneHelpers/reactMarionetteWrapper';
import { getId } from '../sandbox-specific/constants';
import { render } from '../sandbox-specific/adapter/reactHelpers/index';
import * as React from 'react';
import ExtendedTransactionDetail from '../components/extendedTransactionDetail/index';


export function pluginInitialized() {

  george.app.hooks.register('transaction:rendered',
    (params) => {

      const view = params.transactionView;

      onTransactionRendered(view);

    });

}

async function onTransactionRendered(view: LayoutView<any>) {

  const transaction: Transaction = view.model.attributes;

  // try it one by one
  // no batching for now
  const extended = await getExtendedTransaction(transaction.id);

  if (!extended || extended == null) {
    // no detail provided

    return;
  }

  const chunk = `<span class="clickOnMe btn btn-lg btn-info btn-default clickable" title="">
              <svg class="ico-watchdog ic-md">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico-watchdog"></use>
              </svg>
              </span>`;

  view.$('.transaction-icons').append(chunk);

  view.$('.clickOnMe')
    .click((e) => {

      e.preventDefault();
      e.stopPropagation();

      console.log('clicked');

      // creates react wrapped by marionette view
      const View = reactMarionetteWrapper(
        getId(transaction.id),

        (rootId) => render(rootId, <ExtendedTransactionDetail extendedTransaction={extended}/>)
      );

      //Attaches the view into the Region of the Modal
      george.app.mainModalRegion.show(new View());

      //Function to actualy show the Modal
      george.ui.showViewModal('Extended transaction detail', null, null, true, '');

    });


}

