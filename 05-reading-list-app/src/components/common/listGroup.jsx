const ListGroup = ({ items, textProperty, idProperty, onItemSelect, selectedItem }) => {


    return <ul className="list-group">
        {items.map(item => (
            <li
                onClick={() => onItemSelect(item)}
                key={item[idProperty]}
                className={item === selectedItem ? "list-group-item active" : "list-group-item"}
            >
                {item[textProperty]}
            </li>))}

    </ul>;
}


ListGroup.defaultProps = {
    textProperty: 'name',
    idProperty: '_id'
}

export default ListGroup;