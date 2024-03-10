import React from 'react'
import Header from './Components/Header'
import { DescoveryOurHistory } from './Components/DescoveryOurHistory'
import { BannerBackery } from './Components/BannerBackery'
import { ExplorerMenu } from './Components/ExplorerMenu'
import { BackersDelight } from './Components/BackersDelight'
import { CostumberReview } from './Components/CostumberReview'

export const App = () => {
  return (
    <div>
      <Header></Header>
      <DescoveryOurHistory></DescoveryOurHistory>
      <BannerBackery imagen={"imagen-1"} titulo={"Always"} subtitulo={"Fresh"}/>
      <ExplorerMenu></ExplorerMenu>
      <BannerBackery imagen={"imagen-2"} titulo={"EveryThing"} subtitulo={"Tasty"}/>
      <BackersDelight/>
      <CostumberReview/>
    </div>
  )
}
