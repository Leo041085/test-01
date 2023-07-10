import PropTypes from 'prop-types'
import { StatisticsLi, StatisticsStyled, Title } from './StatisticsStyles';

export const Statistics = (props) => {
    function generateRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    return <StatisticsStyled>
        {props.title && <Title>{props.title}</Title>}
        <ul className="stat-list">
            {props.stats.map(data => {
                return (
                    <StatisticsLi key={data.id} color={generateRandomHexColor()} className="item">
                        <span className="label">{data.label}</span>
                        <span className="percentage">{data.percentage}%</span>
                    </StatisticsLi>)
            })}
  </ul>
</StatisticsStyled>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
}