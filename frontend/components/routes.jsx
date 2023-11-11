export default function Routes({route}) {
  return(
    <option value={route.name}>{route.num}: {route.name}</option>
  )
}