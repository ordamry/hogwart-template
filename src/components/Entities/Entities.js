import React from 'react';
import Entity from './Entity';
import './Entities.css';
import { useParams, Link } from 'react-router-dom';

const Entities = ({ getCategoryData }) => {
  const { category } = useParams();

  return (
    <div className="entity-list">
      {getCategoryData(category).map((entity) => (
        <Link
          key={entity.name}
          to={`/wiki/${category}/${encodeURIComponent(entity.name)}`}
        >
          <Entity
            category={category}
            name={entity.name}
            img={entity.img}
            level={entity.level}
          />
        </Link>
      ))}
    </div>
  );
};

export default Entities;
