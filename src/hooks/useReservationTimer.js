import { useCallback, useEffect, useRef, useState } from "react";

export function useReservationTimer(onExpire) {
  const [expiresAt, setExpiresAt] = useState(null);
  const [remainingMs, setRemainingMs] = useState(0);
  const intervalRef = useRef(null);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  const clearTimer = useCallback(() => {
    setExpiresAt(null);
    setRemainingMs(0);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTimer = useCallback(
    (durationMs) => {
      if (expiresAt) return;
      const end = Date.now() + durationMs;
      setExpiresAt(end);
      setRemainingMs(durationMs);
    },
    [expiresAt],
  );

  useEffect(() => {
    if (!expiresAt) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = setInterval(() => {
      const remaining = Math.max(expiresAt - Date.now(), 0);
      setRemainingMs(remaining);

      if (remaining === 0) {
        clearTimer();
        onExpireRef.current?.();
      }
    }, 250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [expiresAt, clearTimer]);

  return {
    remainingMs,
    startTimer,
    clearTimer,
  };
}
