import PropTypes from 'prop-types';

const Heading = ({ subtitle, title }) => {
  return (
    <div id="heading" className="text-start py-6 md:py-10">
      <h3 className="font-semibold tracking-widest text-[#1eb2a6] uppercase text-sm md:text-base lg:text-lg">
        {subtitle}
      </h3>
      <h1 className="text-3xl md:text-4xl lg:text-5xl my-3 md:my-5 capitalize">
        {title}
      </h1>
    </div>
  );
};

Heading.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
