import { useState, useEffect } from 'react';

export const useBookmarks = () => {
    const [bookmarks, setBookmarks] = useState(() => {
        return JSON.parse(localStorage.getItem('udaanpathSavedSchemes') || '[]');
    });

    useEffect(() => {
        localStorage.setItem('udaanpathSavedSchemes', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const saveBookmark = (id) => {
        if (!bookmarks.includes(id)) {
            setBookmarks([...bookmarks, id]);
            return true;
        }
        return false;
    };

    const removeBookmark = (id) => {
        setBookmarks(bookmarks.filter(bId => bId !== id));
    };

    const isBookmarked = (id) => bookmarks.includes(id);

    return { bookmarks, saveBookmark, removeBookmark, isBookmarked };
};
