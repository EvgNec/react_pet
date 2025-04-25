import PropTypes from "prop-types";
import defaultImage from '../no-image.jpg';

export default function  Card  (
    {
        imgUrl = defaultImage,
        word,
        rate,
        eu = '',
        tu = '',
        ele = '',
        nos = '',
        eles = '',
        lang,
    }
)  {
    return (
        <>
        <img src={imgUrl} alt={word} width="480"/>
       <div class="definition">{word}</div>
       <div class="definition">{rate}</div>           
       </>
    )
}

Card.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  };

