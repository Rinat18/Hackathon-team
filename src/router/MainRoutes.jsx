import React from 'react'
import HomePage from '../components/pages/HomePage'
import ProductListPage from '../components/product/ProductListPage'
import AddProductPage from '../components/product/AddProductPage'
import EditProductsPage from '../components/product/EditProductsPage'
import DetailProductPage from '../components/product/DetailProductPage'
import { Route, Routes } from 'react-router-dom'

export default function MainRoutes() {
    const PUBLIC_ROUTES = [
        {path: "/", element:<HomePage />},
        {path: "/list", element:<ProductListPage />},
        {path: "/add", element:<AddProductPage />},
        {path: "/edit/:id", element:<EditProductsPage />},
        {path: "/detail/:id", element:<DetailProductPage />},
    ]

  return (
    <>
        <Routes>
            {PUBLIC_ROUTES.map((elem) => (
                <Route key={elem.path} element={elem.element} />
            ))}
        </Routes>
    </>
  )
}
