import PropTypes from 'prop-types'
import style from './statistics.module.css'

function Statistics({title, stats}) {
  return (  <section className={style.statistics}>
      <h2 className={style.title}>{ title }</h2>

      <ul className={style.statList}>
          {stats.map(({id, label, percentage}) => (
              <li className={style.item} key={ id } style={{ backgroundColor: getRandomHexColor()}}>
                  <span className={style.label}>{ label }</span>
                  <span className={style.percentage}>{percentage }%</span>
        </li>
          ))}

    </ul>
</section>
    )
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;