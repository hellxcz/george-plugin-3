import * as React from 'react';


import { ExtendedTransaction } from '../../apiClient/paystoryDtos';


export interface Props {
  extendedTransaction: ExtendedTransaction;
}


export const ExtendedTransactionDetail: React.SFC<Props> = ({ extendedTransaction }) => {

    return (


      <div className="g-group text-center">{ extendedTransaction.someCoolInfo }</div>

    )
  }
;

export default ExtendedTransactionDetail;