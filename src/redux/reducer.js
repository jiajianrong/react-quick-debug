//import initStateData from './initData';
//import * as actions from './actions';

let count = 0

export default function reducer( previousState={
    users: [],
    products: []
}, action ) {

    console.log('top reducer call: ' + (++count))

	switch (action.type) {

		case 'user-add':
			return {
			    users: [ ...previousState.users, action.payload ],
			    products: previousState.products
			}
        
        case 'product-add':
            return {
                users: previousState.users,
                products: [ ...previousState.products, action.payload ]
            }
        
        default: 
            return previousState
	}	

}