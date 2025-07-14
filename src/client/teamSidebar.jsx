import React, { useState, useEffect } from 'react';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function SidebarAttribute({ attribObj, fullList, filterList, setFilterList }) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [currentAttribute, setCurrentAttribute] = useState(null);

    // useEffect that runs after selectedFilters updates
    useEffect(() => {
        if (currentAttribute) {
            let newItemList = [...fullList];
            
            var i = 0;
            while (i < selectedFilters.length) {
                if (selectedFilters[i].filters.length > 0) {
                    newItemList = newItemList.filter(item => item[selectedFilters[i].attribute] && selectedFilters[i].filters.includes(item[selectedFilters[i].attribute]));
                }
                i++;
            }

            setFilterList(newItemList);
            setCurrentAttribute(null); // Reset the trigger
        }
    }, [selectedFilters, currentAttribute, fullList, setFilterList]);

    const getFilterAttr = (selFilterList, attribute) => {
        for (let filter of selFilterList) {
            console.log("filter", filter);
            console.log("attribute", attribute);
            if (filter.attribute === attribute) {
                return filter.filters;
            }
        }
        return [];
    }

    const handleFilters = (selFilterList, event, attribute) => {
        let newFilters = [...selFilterList];
        let filterAttr = getFilterAttr(selFilterList, attribute);
        if (newFilters.length === 0) {
            newFilters.push({attribute: attribute,
                            filters: [event.target.value]});
        } else {
            if (event.target.checked) {
                filterAttr.push(event.target.value);
            } else {
                filterAttr = filterAttr.filter(value => value !== event.target.value);
            }
            newFilters = newFilters.filter(filter => filter.attribute !== attribute);
            newFilters.push({
                attribute: attribute, 
                filters: filterAttr
            });
        }
        return newFilters;
    }

    const handleChange = (event, attribute) => {
        const newSelectedFilterList = handleFilters(selectedFilters, event, attribute);
        setSelectedFilters(newSelectedFilterList);
        setCurrentAttribute(attribute); // Set the attribute to trigger useEffect
        // Remove the immediate filtering logic - it will happen in useEffect
    }

    return (
        <div>
            {attribObj.map((attribute, index) => {
                const uniqueAttrValues = [...new Set(fullList.map(item => item[attribute]))];
                uniqueAttrValues.sort();
                return (
                    <div className="d-flex flex-column" style={{paddingBottom: "2rem"}}>
                        <p key={index}><b>{capitalize(attribute)}</b></p>
                        <div className="d-flex flex-column">
                            {uniqueAttrValues.map((value, idx) => {
                            return (
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(event) => {handleChange(event, attribute)}}
                                        value={value}
                                        style={{paddingRight: "3rem"}}
                                    />
                                    {` ${value}`}
                                </label>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default SidebarAttribute;