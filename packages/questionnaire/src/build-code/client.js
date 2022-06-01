import 'regenerator-runtime/runtime'
import buildConst from './constants'
import React from 'react' // eslint-disable-line
import { hydrateRoot } from 'react-dom/client'
import Questionnaire from '../react-components'

const namespace = buildConst.namespace
const pkg = buildConst.pkgName
const dataArr = window?.[namespace]?.[pkg]

if (Array.isArray(dataArr) && dataArr.length > 0) {
  // select first data to render and
  // removes it from data array
  const data = dataArr.shift()
  const { uuid, ...dataOfReactComponent } = data
  const container = document.getElementById(uuid)
  const root = hydrateRoot(container,(<Questionnaire {...dataOfReactComponent} />))
}
