import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './modules/Mission.module.css';
import { fetchMissions } from '../redux/mission/missionSlice';
import MissionLists from './MissionList';

const Mission = () => {
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      {isLoading && <h2>Loadding...</h2>}
      {error && <h2>{error}</h2>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Mission</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionLists key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Mission;
