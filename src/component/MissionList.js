import React from 'react';
import PropTypes from 'prop-types';
import styles from './modules/MissionList.module.css';

function MissionLists({ mission }) {
  return (
    <tr className={styles.tr}>
      <th className={styles.th}>{mission.mission_name}</th>
      <td className={styles.td}>
        {mission.description}
      </td>
      <td className={styles.td}><button type="button">Not a member</button></td>
      <td className={styles.td}><button type="button">Join mission</button></td>
    </tr>

  );
}

MissionLists.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool,
  }).isRequired,
};
export default MissionLists;
