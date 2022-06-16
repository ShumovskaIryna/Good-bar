import React from 'react';
<<<<<<< HEAD
import Menu from './components/Menu/Menu';
=======
import TopComponent from './components/TopComponent/TopComponent';
import Items from './components/Items/Items';
import Categories from './components/TopComponent/Categories';
import ShowProduct from './components/Items/FullProduct/FullProduct';

>>>>>>> parent of 4fee62d... move categories to topcomponent
import { getAllGoods } from './request';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProducts: {},
      category: 'Сети'
    };
    
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  async componentDidMount() {
    const { category } = this.state;
    const { data } = await getAllGoods();
    const currentProducts = data.categories.find((el) => el.name === category);
   
    this.setState(() => ({
      currentProducts,
      data
    }));
  }
<<<<<<< HEAD
  
=======
  onShowProduct(item) {
    this.setState({ fullItem: item });
    this.setState({ showProduct: !this.state.showProduct });
  }
>>>>>>> parent of 4fee62d... move categories to topcomponent
  chooseCategory(category) {
    this.setState({
      category,
      currentProducts: this.state.data.categories.find((el) => el.name === category),
    });
  }
  render() {
   const { currentProducts} = this.state;
    return (
      Object.keys(currentProducts).length
        ? (
          <div className="wrapper">
<<<<<<< HEAD
            <Menu
              allCategories={this.state.data}
              chooseCategory={this.chooseCategory}
              // TODO: rename to currentItems
              currentProducts={currentProducts}
            />
=======
            <TopComponent
              orders={orders}
              onDelete={this.deleteOrder}
            />
            <Categories
              allCategories = {this.state.data}
              chooseCategory = {this.chooseCategory}
            />
            <Items
              onShowProduct={this.onShowProduct}
              items={currentItems}
              onAdd={this.addToOrder}
            />
            {this.state.showProduct && <ShowProduct onAdd={this.addToOrder} onShowProduct={this.onShowProduct} item={this.state.fullItem}/>}
>>>>>>> parent of 4fee62d... move categories to topcomponent
          </div>
        )
        : <div>"not yet"</div>
    );
  }
}
export default App;
