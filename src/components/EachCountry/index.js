import './index.css'

const EachCountry = props => {
  const {eachCountry, changeVisitedStatus} = props
  const {id, name, isVisited} = eachCountry
  const visitedStatus = () => {
    changeVisitedStatus(id)
  }
  return (
    <li className="country_item_container">
      <p className="country_name">{name}</p>
      {isVisited ? (
        <p className="visitedText">Visited</p>
      ) : (
        <button onClick={visitedStatus} className="visit_button" type="button">
          Visit
        </button>
      )}
    </li>
  )
}
export default EachCountry
