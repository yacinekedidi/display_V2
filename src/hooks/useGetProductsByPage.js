import { useEffect, useMemo, useRef, useState } from 'react';
import getProductsByPage from '../apis/getProductsByPage';
import useUtils from '../Utils/useUtils';

const useGetProductsByPage = (searchParams) => {
  const { sortWith } = useUtils();
  const page = useRef(0);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const LIMIT = useRef(20);
  const [searchOption, setSearchOption] = useState({
    value: searchParams.get('sort'),
    label: searchParams.get('sort'),
  });
  const params = useMemo(
    () => ({
      sort: sortWith[searchOption.value],
      limit: LIMIT.current,
      reverse: -1,
    }),
    [searchOption.value]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    getProductsByPage(page, params)
      .then((productsPage) => {
        setHasMore(!!productsPage.nextPage);
        page.current = productsPage.nextPage;
        setItems((prev) => [...prev, ...productsPage.data]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    return () => {
      page.current = 0;
      setItems([]);
    };
  }, [params]);

  return { items, isLoading, hasMore, setSearchOption, searchOption };
};

export default useGetProductsByPage;
