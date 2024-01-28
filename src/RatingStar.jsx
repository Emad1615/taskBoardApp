import { useState } from 'react';
function RatingStar({
  maxStarNumber = 6,
  color = '#ED8A19',
  message = [],
  onRate = () => {},
  defaultStarRate = 0,
  id,
  setTasks,
}) {
  const [rating, setRating] = useState(defaultStarRate);
  const [tempRating, setTempRating] = useState(0);
  function HandleRating(rate) {
    setRating(rate);
    onRate(rate);
    if (id) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === id) return { ...task, rating: rate };
          else return task;
        }),
      );
    }
  }
  return (
    <div className="relative m-3 rounded bg-gray-700 pb-1 pl-4 pr-4 pt-1">
      <div className="flex flex-row flex-wrap items-center justify-start gap-1">
        {Array.from({ length: maxStarNumber }, (_, i) => (
          <Star
            key={i}
            onClick={() => HandleRating(i + 1)}
            MouseEnter={() => setTempRating(i + 1)}
            MouseLeave={() => setTempRating(0)}
            isFill={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
          />
        ))}
        <span
          className="m-0 pl-1 pt-1 text-sm font-semibold uppercase leading-4 text-orange-400"
          style={{ fontSize: '.6rem' }}
        >
          {message.length === maxStarNumber
            ? message[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ''}
        </span>
      </div>
    </div>
  );
}
export function Star({ isFill, color, onClick, MouseEnter, MouseLeave }) {
  return (
    <span
      className="m-0 cursor-pointer p-0"
      onClick={onClick}
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
    >
      {isFill ? (
        <svg
          width={'20px'}
          height={'20px'}
          fill={color}
          stroke={color}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.94 47.94"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
          </g>
        </svg>
      ) : (
        <svg
          height="20px"
          width="20px"
          fill={'none'}
          stroke={color}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.94 47.94"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
          </g>
        </svg>
      )}
    </span>
  );
}
export default RatingStar;
