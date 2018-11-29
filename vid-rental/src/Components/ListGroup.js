import React from 'react';

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <div className="ListGroupStyle">
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            key={item[valueProperty] + i}
            className={
              item === selectedItem
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
