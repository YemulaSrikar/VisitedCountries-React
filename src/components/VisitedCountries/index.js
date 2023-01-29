import {
  CountriesList,
  CountryImg,
  CountriesPara,
  RemoveButton,
  VisitedCont,
} from './styledComponents'

const VisitedCountries = props => {
  const {visitedCountriesDetails, removeCountry} = props
  const {id, imageUrl, name} = visitedCountriesDetails
  const onRemoveCountry = () => {
    removeCountry(id)
  }

  return (
    <CountriesList>
      <CountryImg src={imageUrl} alt="thumbnail" />
      <VisitedCont>
        <CountriesPara>{name}</CountriesPara>
        <RemoveButton onClick={onRemoveCountry}>Remove</RemoveButton>
      </VisitedCont>
    </CountriesList>
  )
}
export default VisitedCountries
