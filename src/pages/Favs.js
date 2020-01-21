import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return <Layout title='Tus favoritos' subtitle='Puedes encontrar tus favoritos'>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Layout>
}
