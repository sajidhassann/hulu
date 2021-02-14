import { useEffect, useState } from 'react';
import axios from './axios';
import './Results.css';
import VideoCard from './VideoCard';
import FlipMove from 'react-flip-move';
const Results = ({ selected }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(selected);
      setMovies(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, [selected]);
  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id.toString()} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
