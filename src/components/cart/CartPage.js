import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cartActions';

class CartPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        return (
            <div>
                <h1>Cart Page</h1>
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                    {this.props.items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: () => dispatch(cartActions.fetchCart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);