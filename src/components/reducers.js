 export default function reducers(state, action) {
    switch  (action.type) {
        case 'ADD_TRANSACTION' :
            const newItem = {itemName: action.itemName, amountNum: action.amountNum}
            return [...state, newItem ]

        case 'DEL_TRANSACTION' :
            return state.filter(
                (prevItems, index) => { return index !== action.id}
            )

        default:
            return state

}

}
