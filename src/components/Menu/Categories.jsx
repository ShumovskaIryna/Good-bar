import Category from './Category';

export default function Categories(props) {
  const {
    chooseCategory,
    currentProducts,
    allCategories,
  } = props;
  return (
    <>
      <div className="categories">
        {allCategories.categories.map(({ name }, index) => (
          <div className="categorii">
            <Category
              key={index}
              chooseCategory={chooseCategory}
              categoryName={name}
              products={currentProducts}
              selectedCategory={currentProducts.name}
            />
      </div>
        ))}
      </div>
    </>
  )
}