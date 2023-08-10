import {useState, useRef} from 'react';

import {CSSTransition, Transition} from 'react-transition-group';

import './Test.scss';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
};

const transitionStyles = {
  entering: {opacity: 0},
  entered: {opacity: 0},
  exiting: {opacity: 1},
  exited: {opacity: 1},
};

const Test = () => {

  const [isOpen, setOpen] = useState(false);
  const content = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <button
        className="container__button"
        onClick={() => setOpen((prev) => !prev)}
      >
        Click
      </button>

      <Transition nodeRef={content} in={isOpen} timeout={duration} unmountOnExit>
        {(state) => (
          <div ref={content} style={{
            ...defaultStyle,
            ...transitionStyles,
          }} className="container__content" >
            <h1>ХУйня хуйня

            </h1>
          </div>
        )}
      </Transition>
    </div>
  );
}
 
export default Test;