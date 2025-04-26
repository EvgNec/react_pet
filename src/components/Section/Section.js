import PropTypes from 'prop-types';

function Section({ title, visible, children }) {
  return (
    <div>
   {visible && <h2>{title}</h2>}
      {children}
    </div>
  );
}
Section.prototypes = {
  visible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children:PropTypes.node,
};

export default Section;