import React, { useState } from 'react';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function SidebarAttribute({ attribObj, fullList, filterList, setFilterList }) {
    let selectedFilters = attribObj.reduce((acc, attr) => {
        acc[String(attr)] = [];
        return acc;
    }, {});

    const handleChange = (event, attribute) => {
        if (event.target.checked) {
            selectedFilters[attribute].push(event.target.value);
            setFilterList(fullList.filter(item => item[attribute] === event.target.value));
        } else {
            selectedFilters[attribute] = selectedFilters[attribute].filter(value => value !== event.target.value);
            if (selectedFilters[attribute].length === 0) {
                setFilterList(fullList);
            } else {
                setFilterList(fullList.filter(item => selectedFilters[attribute].includes(item[attribute])));
            }
        }
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