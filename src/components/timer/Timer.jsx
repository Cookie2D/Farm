import React from 'react';
import { normalizeTime } from '../../utils/normalizeTime';
import { useDispatch } from 'react-redux';

export default function Timer({ time, callback }) {
  const [renderTime, setRenderTime] = React.useState(time);

  React.useEffect(() => {
    const id = setInterval(() => {
      setRenderTime(prev => {
        if (prev <= 0) {
          clearInterval(id);
          callback();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <div>{normalizeTime(renderTime)}s</div>;
}
