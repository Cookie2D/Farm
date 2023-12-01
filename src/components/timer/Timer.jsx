import React from 'react';
import { normalizeTime } from '../../utils/normalizeTime';

export default function Timer({ time }) {
  const [renderTime, setRenderTime] = React.useState(time);

  React.useEffect(() => {
    const id = setInterval(() => {
      setRenderTime(prev => {
        if (prev <= 0) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <div>{normalizeTime(renderTime)}s</div>;
}
