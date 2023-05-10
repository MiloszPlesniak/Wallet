import React from 'react';
import Media from 'react-media';
import { breakpoints } from 'styles/breakpoints';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';

export default function TransactionsTable() {
  return (
    <>
      <Media queries={breakpoints}>
        {matches => (
          <>
            {matches.mobile && <TableMobile />}
            {(matches.desktop || matches.tablet) && <TableDesktop />}
          </>
        )}
      </Media>
    </>
  );
}
