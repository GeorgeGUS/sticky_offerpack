import { useState, useRef, useMemo, useEffect } from "react";
import Sticky from "react-stickynode";
import throttle from "lodash.throttle";
import "./OfferPack.css";

const getItem = (isActive) => ({
  title: "Title ",
  text: "This is list item #",
  active: isActive || false,
});

const MAX_LIST_ITEMS_COUNT = 20;

const OfferPack = ({ index, onSubmit }) => {
  const [activeItem, setActive] = useState(0);
  const [top, setTop] = useState(0);
  const stickyRef = useRef(null);
  const listCount = useMemo(
    () => Math.floor(Math.random() * MAX_LIST_ITEMS_COUNT),
    []
  );
  const list = Array(listCount).fill(getItem());
  list[activeItem] = getItem(true);

  useEffect(() => {
    const onWindowResize = throttle(() => {
      if (stickyRef.current) {
        const stickyHeight = stickyRef.current.offsetHeight || 50;
        const newTop = window.innerHeight / 2 - stickyHeight / 2;
        const currentTop = stickyRef.current.parentNode.offsetTop;

        setTop(currentTop < newTop ? currentTop : newTop);
      }
    }, 100);
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className="OfferPack">
      <ul className="OfferPackList">
        {list.map(({ title, text, active }, i) => (
          <li
            key={text + i + index}
            className={`OfferPackList_item ${active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <h3 className="OfferPackList_title">{title}</h3>
            <p className="OfferPackList_text">
              {text}
              {i}
            </p>
          </li>
        ))}
      </ul>
      <div
        className="OfferPack_stickyWrapper"
        id={`OfferPack_stickyWrapper${index}`}
      >
        <Sticky top={top} bottomBoundary={`#OfferPack_stickyWrapper${index}`}>
          <div ref={stickyRef} className="OfferPack_sticky">
            <p>
              Selected item is: {index}-{activeItem}
            </p>
            <button
              className="OfferPack_submit"
              onClick={() => onSubmit(`${index}-${activeItem}`)}
            >
              Submit
            </button>
          </div>
        </Sticky>
      </div>
    </div>
  );
};

export default OfferPack;
