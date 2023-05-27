import React from 'react';
import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
  const { stops } = journey;

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {stops.map((stop, code) => (
          <BusStop
            key={code}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </div>
    </div>
  );
};
