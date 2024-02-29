import * as React from 'react';

import { Styles } from '../../types';

interface Props {
  arrowRef: React.Ref<HTMLSpanElement>;
  placement: string;
  styles: Styles;
}

function FloaterArrow(props: Props) {
  const { arrowRef, placement, styles } = props;

  const {
    arrow: { color, display, length, position, spread },
  } = styles;
  const arrowStyles: React.CSSProperties = { display, position };

  let points;
  let x = spread;
  let y = length;

  /* istanbul ignore else */
  if (placement.startsWith('top')) {
    points = `0,0 ${x / 2},${y} ${x},0`;
  } else if (placement.startsWith('bottom')) {
    points = `${x},${y} ${x / 2},0 0,${y}`;
  } else if (placement.startsWith('left')) {
    y = spread;
    x = length;
    points = `0,0 ${x},${y / 2} 0,${y}`;
  } else if (placement.startsWith('right')) {
    y = spread;
    x = length;
    points = `${x},${y} ${x},0 0,${y / 2}`;
  }

  return (
    <span ref={arrowRef} className="__floater__arrow" style={arrowStyles}>
      <svg
        width="30"
        height="20"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.13332 12C0.12566 12 -0.378978 10.3985 0.333544 9.46189L7.20023 0.435471C7.64193 -0.145157 8.35807 -0.145157 8.79977 0.435471L15.6665 9.46189C16.379 10.3985 15.8743 12 14.8667 12H1.13332Z"
          fill="black"
        />
      </svg>
    </span>
  );
}

export default FloaterArrow;
