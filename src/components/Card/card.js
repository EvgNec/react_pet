import PropTypes from "prop-types";
import defaultImage from '../no-image.jpg';

const Card = (
    {
        imgUrl = defaultImage,
        word,
        eu = '',
        tu = '',
        ele = '',
        nos = '',
        eles = '',
        lang,
    }
) => {
    return (
        <>
        <img src={imgUrl} alt={word} width="480"/>
       <div class="definition">{word}</div> 
       
       </>
    )
}