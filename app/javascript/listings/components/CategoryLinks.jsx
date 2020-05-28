import { h } from 'preact';
import PropTypes from 'prop-types';

const CategoryLinks = ({ categories, onClick, selectedCategory }) => {
  return (
    <section>
      {categories.map((category) => (
        <a
          href={`/listings/${category.slug}`}
          id={`category-link-${category.slug}`}
          className={category.slug === selectedCategory ? 'selected' : ''}
          onClick={(e) => onClick(e, category.slug)}
          data-no-instant
        >
          {category.name}
        </a>
      ))}
    </section>
  );
};

CategoryLinks.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default CategoryLinks;
