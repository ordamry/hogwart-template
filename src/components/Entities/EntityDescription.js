import React from 'react';
import { useParams } from 'react-router-dom';
import './EntityDescription.css';

const EntityDescription = ({ getCategoryData }) => {
  const { category, itemName } = useParams();
  const decodedName = decodeURIComponent(itemName);

  const entity = getCategoryData(category).find(
    (entity) => entity.name === decodedName
  );

  if (!entity) {
    return <p>Item not found</p>;
  }

  const { img, level, description } = entity;

  return (
    <div className="desc-card">
      <img src={img} alt={decodedName} />
      <h3>{decodedName}</h3>
      <p className="desc-card-level">{level}</p>
      <p className="desc-card-description">{description}</p>
    </div>
  );
};

export default EntityDescription;
