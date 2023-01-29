import {ListItems, CountryName, Button, VisitedPara} from './styledComponents'

const Countries = props => {
  const {countries, onVisit} = props
  const {id, name, isVisited} = countries
  const onClickVisit = () => {
    onVisit(id)
  }

  return (
    <ListItems>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedPara>Visited</VisitedPara>
      ) : (
        <Button isVisit={isVisited} onClick={onClickVisit}>
          Visit
        </Button>
      )}
    </ListItems>
  )
}
export default Countries
