import React, { useState, useEffect } from 'react';
import { useSchemes } from '../context/SchemesContext';
import { useBookmarks } from '../hooks/useBookmarks';

function Calendar() {
    const { schemes } = useSchemes();
    const { bookmarks } = useBookmarks();

    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    // Extract real scheme deadlines + mock some exam/training dates for visual demo
    useEffect(() => {
        const today = new Date();
        const extractedEvents = [];

        // Parse valid deadlines from Schemes Database
        schemes.forEach(scheme => {
            if (scheme.deadline && scheme.deadline !== 'Ongoing') {
                const parts = scheme.deadline.split('-');
                if (parts.length === 3) {
                    const isBookmarked = bookmarks.includes(scheme.id);
                    extractedEvents.push({
                        date: new Date(today.getFullYear(), today.getMonth(), parseInt(parts[2])),
                        title: `Deadline: ${scheme.title}`,
                        type: 'deadline',
                        isBookmarked
                    });
                }
            }
        });

        // Demo Seed: Smart Calendar prevents missed opportunities by projecting exam/training phases
        extractedEvents.push({
            date: new Date(today.getFullYear(), today.getMonth(), 15),
            title: "UPSC Prelims Exam",
            type: "exam",
            isBookmarked: false
        });
        extractedEvents.push({
            date: new Date(today.getFullYear(), today.getMonth(), 22),
            title: "PMKVY Batch Training Start",
            type: "training",
            isBookmarked: true
        });

        setEvents(extractedEvents);
    }, [schemes, bookmarks]);

    // Calendar generation logic
    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const monthName = currentDate.toLocaleString('default', { month: 'long' });

    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    // Construct grid dates
    const gridDays = [];
    for (let i = 0; i < firstDay; i++) {
        gridDays.push(null); // Empty slots for offset
    }
    for (let i = 1; i <= daysInMonth; i++) {
        gridDays.push(i);
    }

    const todayFixed = new Date();
    const isToday = (day) => {
        return day === todayFixed.getDate() && month === todayFixed.getMonth() && year === todayFixed.getFullYear();
    };

    const getEventsForDay = (day) => {
        return events.filter(e => e.date.getDate() === day && e.date.getMonth() === month && e.date.getFullYear() === year);
    };

    return (
        <main className="calendar-page" style={{ padding: '4rem 0', minHeight: 'calc(100vh - 100px)' }}>
            <div className="container">
                
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Opportunity Smart Calendar</h1>
                    <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Track application deadlines, upcoming exams, and training start dates. 
                        Never miss out on an opportunity again.
                    </p>
                </div>

                <div className="calendar-container" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden', padding: '2rem' }}>
                    
                    {/* Header Controls */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <button onClick={handlePrevMonth} className="btn" style={{ background: '#e9ecef', color: '#333' }}>&larr; Previous</button>
                        <h2 style={{ margin: 0, color: '#1e3c72', fontSize: '1.8rem' }}>{monthName} {year}</h2>
                        <button onClick={handleNextMonth} className="btn" style={{ background: '#e9ecef', color: '#333' }}>Next &rarr;</button>
                    </div>

                    {/* Legend */}
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', background: '#dc3545' }}></div> Application Deadline</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', background: '#007bff' }}></div> Exam Date</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28a745' }}></div> Training Starts</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ border: '1px solid #ffc107', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', color: '#d39e00', fontWeight: 'bold' }}>⭐ Saved</span> Your Bookmarked Scheme</span>
                    </div>

                    {/* Grid Days of Week */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', background: '#eee', border: '1px solid #eee' }}>
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                            <div key={d} style={{ background: '#f8f9fa', padding: '1rem', textAlign: 'center', fontWeight: 'bold', color: '#555' }}>{d}</div>
                        ))}
                    </div>

                    {/* Grid Cells */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', background: '#eee', borderLeft: '1px solid #eee', borderRight: '1px solid #eee', borderBottom: '1px solid #eee' }}>
                        {gridDays.map((day, idx) => {
                            const dayEvents = day ? getEventsForDay(day) : [];
                            return (
                                <div key={idx} style={{ 
                                    background: isToday(day) ? '#fffae6' : '#fff', 
                                    minHeight: '120px', 
                                    padding: '0.5rem',
                                    borderTop: isToday(day) ? '3px solid #ffc107' : 'none'
                                }}>
                                    {day && <div style={{ fontSize: '1.2rem', fontWeight: isToday(day) ? 'bold' : 'normal', color: isToday(day) ? '#d39e00' : '#333', marginBottom: '0.5rem' }}>{day}</div>}
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                        {dayEvents.map((evt, eIdx) => (
                                            <div key={eIdx} style={{
                                                fontSize: '0.75rem',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '4px',
                                                color: '#fff',
                                                background: evt.type === 'deadline' ? '#dc3545' : evt.type === 'exam' ? '#007bff' : '#28a745',
                                                border: evt.isBookmarked ? '2px solid #ffc107' : 'none',
                                                lineHeight: 1.2,
                                                wordWrap: 'break-word'
                                            }}>
                                                {evt.isBookmarked && <span style={{marginRight: '3px'}}>⭐</span>}
                                                {evt.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Calendar;
