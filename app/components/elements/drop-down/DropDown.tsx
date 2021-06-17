import styles from './drop-down.module.scss';
interface PropInterfaces {
  regions: string[];
  defaultOption: string;
}
function DropDownList({ regions, defaultOption }: PropInterfaces) {

  return (
    <form>
      <select className={styles.dropDown}>
        <option>{defaultOption}</option>
        {regions.map((location: string, i: number) => (
          <option value={location} key={i}>
            {location}
          </option>
        ))}
      </select>
    </form>
  );
}

export default DropDownList;
