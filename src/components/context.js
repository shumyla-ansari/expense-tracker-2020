import React from 'react'

export const transactionContext = React.createContext({
    state: {itemName:"", amountNum:""},
    dispatch: () => {}
})