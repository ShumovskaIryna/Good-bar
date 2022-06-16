import React from 'react';
import Menu from './components/Menu/Menu';
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
            <Menu
              allCategories={this.state.data}
              chooseCategory={this.chooseCategory}
              // TODO: rename to currentItems
              currentProducts={currentProducts}
            />
          </div>
        )
        : <div>"not yet"</div>
    );
  }
}
export default App;
