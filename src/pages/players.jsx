'use client'
import React, { useState, useEffect } from 'react'
import { fetchPlayers } from '../utils/api'
import PlayerCard from '@/components/PlayerCard'

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const data = await fetchPlayers();
                setPlayers(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getPlayers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1 className='text-center text-4xl font-semibold py-8'>NBA Players</h1>
            <div className="grid grid-cols-4 gap-4">
                {players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    )
}

export default Players