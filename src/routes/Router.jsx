import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('../views/pages/Home'));
const Radio = lazy(() => import('../views/pages/Radio'));
const Kids = lazy(() => import('../views/pages/Kids'));

const Router = [
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    exact: true,
  },
  {
    path: '/radio',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Radio />
      </Suspense>
    ),
    exact: true,
  },
  {
    path: '/kids',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Kids />
      </Suspense>
    ),
    exact: true,
  },
];



export default Router;
