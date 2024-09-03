import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const BankCard = ({account, userName, showBalance=true}:CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href="/" className='bank-card'>
        <div className="bank-card_content">
            <div>
                <h1 className="text-16 font-semibold text-white">
                    {/*optional chaining operator if account is undefined then || */}
                    {account.name || userName}
                </h1>
                <p className="font-black font-ibm-plex-serif text-white">
                    {formatAmount(account.currentBalance)}
                </p>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default BankCard
