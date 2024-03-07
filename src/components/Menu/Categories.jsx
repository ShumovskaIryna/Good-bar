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
            <Category
              key={index}
              chooseCategory={chooseCategory}
              categoryName={name}
              products={currentProducts}
            />
        ))}
      </div>
    </>
  )
}