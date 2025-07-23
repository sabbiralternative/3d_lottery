import { useSelector } from "react-redux";
import { useAuth } from "../../../../../double_wheel/double_wheel/src/hooks/auth";
import { useEffect } from "react";

const Navbar = () => {
  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();

  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);
  return (
    <div className="header-wrapper">
      <div className="header-spacer" />
      <div className="header-bar">
        <div className="header-left-wrapper">
          <div className="back-icon-wrapper">
            <div className="back-logo">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fontSize: "28px", marginTop: "4px" }}
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
              </svg>
            </div>
          </div>
          <div className="game-three">Quick 3D lottery</div>
          <div className="sound-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z" />
            </svg>
          </div>
        </div>
        <div className="header-right">
          <div className="balance-info">
            <div className="balance-section-head">
              <span className="bal">Balance</span>
              <span className="bal-amount">{balance}</span>
            </div>
            <div className="relative">
              <img
                alt="wallet"
                src="data:image/webp;base64,UklGRqIEAABXRUJQVlA4WAoAAAAwAAAAIwAAIwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBI1gAAAAWAq23bIef9t9p69wSmXlsdknSZnMKiCivbaFPbzhHYdvpMbHb2GH1ETAAU2ZqSsR9mjqSJdeJ7Io2JHElh2KLwfz/1RoLmIrAv0E+iUQy4B5IvYq17eeAof1yceAf491UciUDNUALwmDksrDMGwfEuQXktEPzp3hNSVQ0Rj8JHbEYv8I30bIg6G/lmKauHlOv0tQzQXCKHXaccDmzaU14nzb5dDt86damo1YZXvRx2nfKprFHejksO2245rITk0BWXwWH06J+JBkAAEMJCWAhAgPOxZwBWUDgg1gEAAJAKAJ0BKiQAJAA+bTKTSCQioaEjjACADYlmALfrVEDdFXorzgH6k74B+xXWQegB5XXsr/tN6RhTB/ICr864HwZKcczJkA0+pZP7lIX/3nDiqA9DSI5qB21dI8c4AAD+/zpB/2GLjUE3DzATnc5x/fZL8T1n/33Bm3TyqERMrFJU1WbE5JE7cbIyZxssa6S/+/ZccmmgDFf+76VIetEOZPZ/3yh0kHf/rBhL1W61psaf1vxl72X/3xVnNEMYmpcwHi/LuGnCzW30hH5ACDR1P533d+FlFHjZ+22fdx4xXA7OYwmsewjlLU/y2rnecvWFXwK2wX+s9Iat7CYgKHthGLhrXbBUN62VyrOeUGIi9b0C3zfH8/xn+DXOM9IKZ3Uw48T//3Mv///O6bFiK8x66qPbTNKDQyyAwjDCetAucaKb8I7dGWe3PCRKTXXdN9KlLcgZIkj3fPZU09PpXYqrCcgju99n1kAXs3Db75sJ8ZeKz2MWB7w3qztKr19oR9UrhzsstY+AAcK5RM0UOu392yMGj9N1Ea/06GpAkWIwMmuZIN/7TaVuRoVveUskrf3nAVprbcAJEGi62NsTFKcQM68/Rc98nW0FnutXZvVkvFXZ1hWshwAA"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
