import React from 'react';
import styles from './modules/Mission.module.css';

const Mission = () => (
  <div className={styles.container}>
    <table className={styles.table}>
      <tr>
        <th className={styles.th}>Mission</th>
        <th className={styles.th}>Description</th>
        <th className={styles.th}>Status</th>
        <th className={styles.th}>hide</th>
      </tr>
      <tr className={styles.tr}>
        <th className={styles.th}>Mission</th>
        <td className={styles.td}>
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum
          accusamus aut, commodi distinctio
          ipsam, sunt nulla eum asperiores
          inventore doloribus cumque
          magnam quaerat alias quidem non?
          Aliquam, accusantium porro. Rem?
        </td>
        <td className={styles.td}><button type="button">Not a member</button></td>
        <td className={styles.td}><button type="button">Join mission</button></td>
      </tr>
      <tr className={styles.tr}>
        <th className={styles.th}>Mission</th>
        <td className={styles.td}>
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum
          accusamus aut, commodi distinctio
          ipsam, sunt nulla eum asperiores
          inventore doloribus cumque
          magnam quaerat alias quidem non?
          Aliquam, accusantium porro. Rem?
        </td>
        <td className={styles.td}><button type="button">Not a member</button></td>
        <td className={styles.td}><button type="button">Join mission</button></td>
      </tr>
      <tr className={styles.tr}>
        <th className={styles.th}>Mission</th>
        <td className={styles.td}>
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum
          accusamus aut, commodi distinctio
          ipsam, sunt nulla eum asperiores
          inventore doloribus cumque
          magnam quaerat alias quidem non?
          Aliquam, accusantium porro. Rem?
        </td>
        <td className={styles.td}><button type="button">Not a member</button></td>
        <td className={styles.td}><button type="button">Join mission</button></td>
      </tr>
      <tr className={styles.tr}>
        <th className={styles.th}>Mission</th>
        <td className={styles.td}>
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum
          accusamus aut, commodi distinctio
          ipsam, sunt nulla eum asperiores
          inventore doloribus cumque
          magnam quaerat alias quidem non?
          Aliquam, accusantium porro. Rem?
        </td>
        <td className={styles.td}><button type="button">Not a member</button></td>
        <td className={styles.td}><button type="button">Join mission</button></td>
      </tr>
    </table>
  </div>
);
export default Mission;
