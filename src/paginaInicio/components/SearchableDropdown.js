import React, { useState, useEffect } from 'react';

const SearchableDropdown = ({ items, placeholder, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const results = items.filter(item =>
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.carnet.includes(searchTerm)
        );
        setFilteredItems(results);
    }, [searchTerm, items]);

    return (
        <div className="relative">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder={placeholder}
            />
            {filteredItems.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border rounded mt-1 max-h-48 overflow-auto">
                    {filteredItems.map(item => (
                        <li
                            key={item.id}
                            onClick={() => {
                                onSelect(item);
                                setSearchTerm('');
                                setFilteredItems([]);
                            }}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                        >
                            {item.nombre} - {item.carnet}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchableDropdown;