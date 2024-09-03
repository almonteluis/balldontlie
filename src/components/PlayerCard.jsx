import React from 'react'
import Link from 'next/link'

const PlayerCard = ({ player }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{player.first_name} {player.last_name}</h2>
            <p className="text-gray-600 mb-4">Team: {player.team.full_name}</p>
            <Link className="text-blue-500 hover:text-blue-700 underline" href={`/player/${player.id}`}>
                View Details
            </Link>
        </div>
    )
}

export default PlayerCard