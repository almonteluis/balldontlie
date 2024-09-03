import { useRouter } from 'next/router';
import { fetchPlayerById } from '../../utils/api';

const PlayerDetail = ({ player }) => {
  return (
    <div className="min-h-screen bg-rose-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl font-bold">{player.first_name} {player.last_name}</h1>
          <p className="text-sm">position: {player.position}</p>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="ml-4">
              <p className="text-lg font-semibold">jersey_number: {player.jersey_number}</p>
              {/* <p className="text-gray-600">{player.college}</p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Height</h3>
              <p className="text-gray-600">{player.height}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Weight</h3>
              <p className="text-gray-600">{player.weight}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Draft Year</h3>
              <p className="text-gray-600">{player.draft_year}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Draft Round</h3>
              <p className="text-gray-600">{player.draft_round}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm col-span-2">
              <h3 className="text-lg font-semibold text-gray-800">Team</h3>
              <p className="text-gray-600">{player.team.full_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const response = await fetchPlayerById(params.id);
    const player = response.data; // Access the nested data object
    console.log('Fetched Player Data:', player); // Debugging line

    // Validate that team information is included
    if (!player || !player.team) {
      console.warn('Player data or team information is missing');
      return {
        notFound: true,
      };
    }

    return {
      props: {
        player,
      },
    };
  } catch (error) {
    console.error('Error fetching player data:', error);
    return {
      notFound: true,
    };
  }
}


export default PlayerDetail;
