import { useFetch } from 'hooks/useFetch';
import Loader from 'components/filtrosComb/Loader';

const ListFiltros = ({title, url, handleChange}) => {
  const {data, error, loading} = useFetch(url)
  console.log(data, error, loading);

  if(!data) return null;

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader/>}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
      </select>
    </>
  )
}

export default ListFiltros;
