import { useEffect, useState } from 'react';
import getProductByCategoryAndByPage from '../apis/getProductByCategoryAndByPage';

const useGetProductByCategoryAndByPage = (search, categoryOption) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!search.length) {
      setResults([]);
      return;
    }
    getProductByCategoryAndByPage(search, categoryOption, page).then(
      (response) => setResults(response.data)
    );
  }, [search, categoryOption, page]);

  return { results };
};

export default useGetProductByCategoryAndByPage;
