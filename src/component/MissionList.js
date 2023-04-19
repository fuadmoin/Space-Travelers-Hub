import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/mission/missionSlice';
import styles from './modules/MissionList.module.css';

function MissionLists({ mission }) {
  const dispatch = useDispatch();
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <tr className={styles.tr}>
      <th className={styles.th}>{mission.mission_name}</th>
      <td className={styles.td}>
        {mission.description}
      </td>
      <td className={styles.td}>
        {mission.reserved && <button type="button" className={styles.activeMember}>Active Member</button>}
        {!mission.reserved && <button type="button" className={styles.notMember}>Not a member</button>}
      </td>
      <td className={styles.td}>
        {!mission.reserved && <button type="button" className={styles.join} onClick={() => handleJoin(mission.mission_id)}>Join Mission</button>}
        {mission.reserved && <button type="button" className={styles.leave} onClick={() => handleLeave(mission.mission_id)}>Leave Mission</button>}

      </td>
    </tr>

  );
}

MissionLists.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};
export default MissionLists;
