import React from 'react'

const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance' >
      <div className="total-balance-chart">

      </div>
      <div className="flex flex-col gap-6">
        <h2 className='header-2'>
            Bank Accounts :{totalBanks}
        </h2>
        <div className='flex-col flex gap-2'>
            <p className="total-balance-label">t</p>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
