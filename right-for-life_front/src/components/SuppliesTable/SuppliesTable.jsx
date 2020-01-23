import React, { Component } from 'react';
import './SuppliesTable.css';
import SuppliesTableRow from '../SuppliesTableRow';

export default class SuppliesTable extends Component {
  constructor() {
    super();
    this.getData();
  }
  state = {
    suppliesData: []
  };
  getData() {
    fetch(
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo3/supplies.json'
    )
      .then(resp => resp.json())
      .then(body =>
        this.setState({
          suppliesData: body
        })
      );
  }
  getTableBody(suppliesArr) {
    return [...suppliesArr]
      .sort((a, b) => {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0;
      })
      .map(el => {
        return <SuppliesTableRow itemData={el} key={el.id} />;
      });
  }
  render() {
    const { suppliesData } = this.state;
    const tableBody =
      suppliesData.length > 0 ? this.getTableBody(suppliesData) : null;

    return (
      <table className='table-fixed mx-auto mt-6'>
        <thead>
          <tr className='text-2xl uppercase font-bold text-lightgray-700'>
            <th className='px-4 py-2'>Товар</th>
            <th className='px-4 py-2'>Тип</th>
            <th className='px-4 py-2'>Кол-во</th>
            <th className='px-4 py-2'>Инфо</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    );
  }
}
