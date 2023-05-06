import React from 'react';
import Media from 'react-media';

import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';

export default function TransactionsTable() {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && <TableMobile />}
          {(matches.desktop || matches.tablet) && <TableDesktop />}
        </>
      )}
    </Media>
  );
}
