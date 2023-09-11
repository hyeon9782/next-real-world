'use client';
import { getArticles } from '@/services/articles';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Articles = () => {
  // SSR
  const { data } = useQuery({ queryKey: ['articles'], queryFn: () => getArticles() });

  // CSR
  const { data: otherData } = useQuery({
    queryKey: ['posts-not-ssr'],
    queryFn: () => getArticles(),
  });
  return (
    <div>
      {data.articles.map((article, i) => (
        <div key={i}>{article.slug}</div>
      ))}

      {otherData?.articles?.map(a => <div key={a.slug}> {a.slug}</div>)}
    </div>
  );
};

export default Articles;
