import styles from './list.module.scss';

interface ListPropInterface {
  list: string[];
  title: string;
}
function List({ list, title }: ListPropInterface) {
  return (
    <div>
      <ul className={styles.list}>
        <li id={styles.firstChild}>{title}</li>
        {list.map((itm: string, idx: number) => {
          return (
            <li className={styles.listItem} key={idx}>
              {itm}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
