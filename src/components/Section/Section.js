import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
    <h2>{title}</h2>
      {children}
    </div>
  );
}
Section.prototypes = {
  title: PropTypes.string.isRequired,
};

export default Section;