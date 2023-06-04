import React, { useEffect } from 'react';
import './styles.css';
import { useSearchQuery } from '../../store/search.api';
import { skipToken } from '@reduxjs/toolkit/query';

function ListItem({ name, banner, desc }) {
  return (
    <div className="list-item">
      <div className="list-banner">
        <img src={banner} className="App-logo" alt="banner" />
      </div>
      <div className="list-content">
        <div className="list-name">{name}</div>
        <div className="list-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function ListResult({ query }) {
  const {
    data: { events, performers, venues } = {
      events: [],
      performers: [],
      venues: [],
    },
  } = useSearchQuery(query || skipToken);

  return (
    <div className="list-container">
      {query && (
        <div className="list">
          {events
            .filter((e, i) => i < 3)
            .map((event) => (
              <ListItem
                name={event.event.name}
                banner={event.performers[0].hero_image_url}
                desc={event.venue.name}
              />
            ))}
          {performers
            .filter((e, i) => i < 3)
            .map((performer) => (
              <ListItem
                name={performer.name}
                banner={performer.hero_image_url}
                desc={performer.cateogry}
              />
            ))}
          {venues
            .filter((e, i) => i < 3)
            .map((venue) => (
              <ListItem
                name={venue.name}
                banner={venue.image_url}
                desc={venue.city}
              />
            ))}
        </div>
      )}
    </div>
  );
}
