import { useState } from 'react'
import QRCode from '../components/QRCode';
import '../scss/App.scss';

function App() {
  const x = "y";

  return (
    <div className="payment-page">
      <QRCode />
      <div className="order-info">
        <span id="id">
          <span>ORDER ID</span>
          #314
        </span>
        <span id="cost">
          <span>COST</span>
          68₺
        </span>
      </div>
    </div>
  )
}

export default App
