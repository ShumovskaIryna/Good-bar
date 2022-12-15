import Category from './Category';

export default function Test(props) {
  const {
    chooseCategory,
    currentProducts,
    allCategories,
  } = props;
  return (
    <div>
      {allCategories.categories.map(({ name }, index) => (
        <div className="categorii">
          <Category
            key={index}
            chooseCategory={chooseCategory}
            gategoryName={name}
            products={currentProducts}
          />
        </div>
      ))}
    </div>
  )
}