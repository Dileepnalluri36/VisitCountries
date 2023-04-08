import './index.css'

const EachVisitedCountry = props => {
  const {eachCountry, removeVisitedStatus} = props
  const {id, name, imageUrl} = eachCountry

  const removeVisited = () => {
    removeVisitedStatus(id)
  }

  return (
    <li className="each_visited_country">
      <img className="country_img" src={imageUrl} alt="thumbnail" />
      <div className="country_details">
        <p className="country_name">{name}</p>
        <button onClick={removeVisited} className="remove_button" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default EachVisitedCountry
