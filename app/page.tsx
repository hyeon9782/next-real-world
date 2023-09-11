import Articles from '@/components/articles/Articles';
import getQueryClient from '@/libs/getQueryClient';
import { getArticles } from '@/services/articles';
import { container } from '@/styles/app.css';
import { Hydrate, dehydrate, useInfiniteQuery } from '@tanstack/react-query';

const posts = [
  {
    id: 1,
    title: 'post 1',
  },
  {
    id: 2,
    title: 'post 2',
  },
  {
    id: 3,
    title: 'post 3',
  },
  {
    id: 4,
    title: 'post 4',
  },
  {
    id: 5,
    title: 'post 5',
  },
  {
    id: 6,
    title: 'post 6',
  },
];

const fetchPost = async (page: number) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return posts.slice(page - 1 * 2, page * 2);
};

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['articles'], () => getArticles());
  const dehydratedState = dehydrate(queryClient);
  // const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   ['query'],
  //   async ({ pageParam = 1 }) => {
  //     const response = await fetchPost(pageParam);
  //     return response;
  //   },
  //   {
  //     getNextPageParam: (_, pages) => {
  //       return pages.length + 1;
  //     },
  //     initialData: {
  //       pages: [posts.slice(0, 2)],
  //       pageParams: [1],
  //     },
  //   }
  // );

  return (
    <div className={container}>
      <Hydrate state={dehydratedState}>
        <Articles />
      </Hydrate>
    </div>
  );
};

export default Page;
