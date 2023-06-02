import React, { useEffect, useState } from 'react';
import usersApi from '../../../api/usersApi';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, initPervState } from '../../../store/counterSlice';
import { stateOfAlbumsArray, stateOfPhotosArray } from '../../../store/apiSlice';
import styles from './photosPage.module.scss';

const PhotosPage = () => {
  const params = useParams();
  const { userId } = params;
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const albums = useSelector((state) => state.api.albums);
  const photos = useSelector((state) => state.api.photos);
  const [pageState, setPageState] = useState('loading');

  useEffect(() => {
    dispatch(initPervState(1));
  }, [userId]);

  useEffect(() => {
    if (userId) {
      usersApi
        .fetchAlbumsId(userId)
        .then((albumIds) => {
          dispatch(stateOfAlbumsArray(albumIds));
        })
        .catch((error) => {
          console.error(error);
          setPageState('error');
        });
    }
  }, [userId]);

  useEffect(() => {
    usersApi
      .fetchPhotos()
      .then((data) => {
        dispatch(stateOfPhotosArray(data));
        setPageState('success');
      })
      .catch((error) => {
        console.log(error);
        setPageState('error');
      });
  }, [albums]);

  if (pageState === 'loading') {
    return <h1>Loading</h1>;
  }

  if (pageState === 'error') {
    return <h1>Error</h1>;
  }

  if (!userId) {
    return <h1>Нет данных...</h1>;
  }

  if (albums.length > 0) {
    const filteredPhotos =
      albums.length > 0 ? photos.filter((photo) => albums.includes(photo.albumId)) : [];
    const startIndex = (count - 1) * 10;
    const endIndex = startIndex + 10;
    const currentPhotos = filteredPhotos.slice(startIndex, endIndex);

    return (
      <div>
        <div className={styles.cardBody}>
          {currentPhotos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} className={styles.cardContent} />
              <p>{photo.id}</p>
            </div>
          ))}
        </div>
        <div>
          <button onClick={() => dispatch(decrement())} disabled={count === 1}>
            Previous
          </button>
          <button onClick={() => dispatch(increment())} disabled={count === 10}>
            Next
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default PhotosPage;
