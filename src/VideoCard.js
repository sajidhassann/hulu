import { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';
import './VideoCard.css';

const base_url = 'https://image.tmdb.org/t/p/original';
const VideoCard = forwardRef(
  (
    {
      movie: {
        backdrop_path,
        title,
        original_title,
        original_name,
        original_language,
        poster_path,
        overview,
        vote_count,
        media_type,
        release_date,
        first_air_date,
      },
    },
    ref
  ) => {
    const Title = original_name || title;
    return (
      <div ref={ref} className='videoCard'>
        <img
          src={base_url + (backdrop_path || poster_path)}
          alt={original_title}
        />
        <TextTruncate line={1} element='p' truncateText='...' text={overview} />
        <h2>
          {original_language === 'en'
            ? Title
            : `${Title} ${
                original_title && original_title !== Title
                  ? `(${original_title})`
                  : ''
              }`}
          {/* {`${title} ${original_language !== 'en' ? original_title : ''}`} */}
        </h2>
        <p className='videoCard-stats'>
          {media_type && `${media_type} ● `}
          {release_date || first_air_date} ● <ThumbUpSharp fontSize='inherit' />{' '}
          {vote_count}
        </p>
      </div>
    );
  }
);

export default VideoCard;
