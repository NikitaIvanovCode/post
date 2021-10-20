import { FC, useRef } from 'react';
import './slider.css';

type Props = {
  data: any;
  space?: number;
};

export const Slider: FC<Props> = ({ data, space }) => {
  const slideRef: any = useRef(null);

  if (data) {
    return (
      <div className="slider">
        <div
          className="track"
          style={{
            gridGap: `${space}px`,
            gridTemplateColumns: `repeat(${data.length}, ${
              slideRef.current && slideRef.current.width
            }px)`,
          }}
        >
          {data.map((item: any) => {
            return (
              <div ref={slideRef} className="slide">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
