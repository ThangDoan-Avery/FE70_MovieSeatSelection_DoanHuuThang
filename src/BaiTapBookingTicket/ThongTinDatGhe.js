import React, { Component } from 'react';

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon'></button>{' '}
          <span className='text-light' style={{ fontSize: '25px' }}>
            : Ghế đã được đặt
          </span>
          <br />
          <button className='gheDangChon'></button>{' '}
          <span className='text-light' style={{ fontSize: '25px' }}>
            : Ghế đang đặt
          </span>
          <br />
          <button className='ghe' style={{ marginLeft: '0px' }}></button>{' '}
          <span className='text-light' style={{ fontSize: '25px' }}>
            : Ghế chưa đặt
          </span>
        </div>
        <div className='mt-5'>
          <table class='table' border='2'>
            <thead className='text-light' style={{ fontSize: '20px' }}>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
