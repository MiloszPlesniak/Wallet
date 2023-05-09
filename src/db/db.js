function createData(date, type, category, comment, sum) {
  return { date, type, category, comment, sum };
}

const db = {
  transactions: [
    createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
    createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
    createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
    createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
    createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
    createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
    createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
    createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
    createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
    createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
    createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
    createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
    createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
    createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
    createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
    createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
    createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
    createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
    createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
    createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
    createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  ],

  categories: [
    {
      type: 'income',
      category: [
        {
          name: 'income',
          color: '#FED057',
        },
      ],
    },
    {
      type: 'expense',
      category: [
        {
          name: 'main expenses',
          color: '#FED057',
        },
        {
          name: 'products',
          color: '#FFD8D0',
        },
        {
          name: 'car',
          color: '#FD9498',
        },
        {
          name: 'self care',
          color: '#C5BAFF',
        },
        {
          name: 'child care',
          color: '#6E78E8',
        },
        {
          name: 'household products',
          color: '#4A56E2',
        },
        {
          name: 'education',
          color: '#81E1FF',
        },
        {
          name: 'leisure',
          color: '#24CCA7',
        },
        {
          name: 'other expenses',
          color: '#00AD84',
        },
      ],
    },
  ],
};

export default db;
