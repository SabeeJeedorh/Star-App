// import { range } from './utils';
import { range } from "./util";

function StarRating({ rating }) {
  return (
    <div className="star-wrapper">
      {Array.from({ length: rating }).map((index) => (
        <img
          key={index}
          alt="Star"
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))}
    </div>
  );
}

export default StarRating;
