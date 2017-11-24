import React from 'react';
import {connect} from 'react-redux';


let count = 0

class ReduxCompB extends React.Component {
    
	render() {
        
        console.log('redux_comp_b reducer call: ' + (++count))
        
        return (
            <div className="Main">
                    
                    <b>ReduxCompB</b>
                    <ul>
                    
                    {
                        this.props.products.map((product, index) => {
                            return (
                                <li key={product.id}>{product.id} | {product.name}</li>
                            )
                        })
                    }
                    
                    </ul>
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {products: state.products}
};

export default connect(mapStateToProps)(ReduxCompB);