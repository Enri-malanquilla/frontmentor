import { useEffect, useState } from 'react';

export const Info = ({ id, act, time, daily, weekly, monthly }) => {
  const [open, setOpen] = useState(true);

  return (
    <section className='info' id={id.toLowerCase().replace(' ', '-')}>
      <aside>
        <img src={`icon-${id.toLowerCase().replace(' ', '-')}.svg`} />
      </aside>
      <article>
        <h1>{id}</h1>
        <button className='abrir-cerrar' onClick={(e) => setOpen(!open)}>
          ...
        </button>
        {open && (
          <>
            {(daily && <h2>{`${time.daily.current}hrs`}</h2>) ||
              (weekly && <h2>{`${time.weekly.current}hrs`}</h2>) ||
              (monthly && <h2>{`${time.monthly.current}hrs`}</h2>)}
            {(daily && <p>Previous - {`${time.daily.previous}`}hrs</p>) ||
              (weekly && <p>Previous - {`${time.weekly.previous}`}hrs</p>) ||
              (monthly && <p>Previous - {`${time.monthly.previous}`}hrs</p>)}
          </>
        )}
      </article>
    </section>
  );
};
