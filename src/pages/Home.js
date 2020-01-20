import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
