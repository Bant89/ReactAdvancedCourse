import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ id }) => (
  <Layout title={`Fotografia ${id}`}>
    <PhotoCardWithQuery id={id} />
  </Layout>
)
