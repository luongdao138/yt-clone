import { useRef } from 'react';
import { useEffect } from 'react';

const useEventListener = (
  eventType = '',
  target = window,
  listener = () => null
) => {
  const listenerRef = useRef();
  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;
    const eventListener = (e) => listenerRef.current(e);
    target.addEventListener(eventType, eventListener);
    return () => target.removeEventListener(eventType, eventListener);
  }, [eventType, target]);
};

export default useEventListener;
