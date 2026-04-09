import React, { createContext, useContext, useState, useEffect } from 'react';
import backendData from '../../Links(BackEnd).json';

const SchemesContext = createContext();

export const SchemesProvider = ({ children }) => {
    const [schemes, setSchemes] = useState(() => {
        const stored = localStorage.getItem('udaanpathSchemes_v5');
        if (stored) return JSON.parse(stored);

        // Normalize backend data exactly once when initializing
        const rawSchemes = backendData.schemes || [];
        const normalized = rawSchemes.map((item, index) => {
            // Title case formatting for categories
            const rawType = item.category ? item.category.replace(/_/g, ' ') : 'general';
            const formattedType = rawType.charAt(0).toUpperCase() + rawType.slice(1);

            return {
                id: index + 1000, // Unique static IDs for routing
                title: item.name || 'Unnamed Scheme',
                type: formattedType,
                description: item.description || '',
                link: item.link || '',
                features: item.features || [],
                pros: item.pros || [],
                cons: item.cons || [],
                eligibility: item.eligibility || 
                            (item.eligibility_criteria ? item.eligibility_criteria.join(' • ') : 'Not specified'),
                gender: item.gender || 'all',
                incomeRange: item.income ? item.income.replace(/_/g, ' ') : 'Not specified',
                time: item.time ? item.time.replace(/_/g, ' ') : '',
                state: 'All' // Fallback for prior app functions
            };
        });
        
        return normalized;
    });

    useEffect(() => {
        localStorage.setItem('udaanpathSchemes_v5', JSON.stringify(schemes));
    }, [schemes]);

    const addScheme = (newScheme) => {
        const schemeWithId = { 
            ...newScheme, 
            id: Date.now()
        };
        setSchemes([schemeWithId, ...schemes]);
    };

    const deleteScheme = (id) => {
        setSchemes(schemes.filter(s => s.id !== id));
    };

    return (
        <SchemesContext.Provider value={{ schemes, addScheme, deleteScheme }}>
            {children}
        </SchemesContext.Provider>
    );
};

export const useSchemes = () => useContext(SchemesContext);
