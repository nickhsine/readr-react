import React from 'react' // eslint-disable-line
import ElectionVotesComparison from '../src/react-components'
import { createRoot } from 'react-dom/client'

const reactRootId = 'root'
const container = document.getElementById(reactRootId)
const root = createRoot(container)

const mockData = {
  districts: [
    {
      type: 'normal',
      districtName: '01',
      candidates: [
        {
          number: 1,
          name: {
            label: '王芝安',
            href: 'https://readr.tw',
            imgSrc: './candidate-1.jpg',
          },
          party: {
            label: '中國國家社會主義勞工黨',
            href: 'https://readr.tw',
          },
          votes: 70231,
          voteRate: 8.45,
          elected: false,
        },
        {
          number: 2,
          name: {
            label: '王芝安',
            href: 'https://readr.tw',
            imgSrc: './candidate-2.jpg',
          },
          party: {
            label: '民主進步黨',
            href: 'https://readr.tw',
          },
          votes: 8170231,
          voteRate: 22.29,
          elected: true,
        },
      ],
    },
    {
      type: 'plainIndigenous',
      districtName: '02',
      candidates: [
        {
          number: 1,
          name: {
            label: '沒資料',
            imgSrc: '',
          },
          party: {
            label: '民主進步黨',
            href: 'https://readr.tw',
          },
          votes: 8170231,
          voteRate: 22.29,
          elected: true,
        },
        {
          number: 2,
          name: {
            label: '王芝安',
            href: 'https://readr.tw',
            imgSrc: './candidate-3.jpg',
          },
          party: {
            label: '中國國家社會主義勞工黨',
            href: 'https://readr.tw',
          },
          votes: 70231,
          voteRate: 8.45,
          elected: false,
        },
      ],
    },
    {
      type: 'mountainIndigenous',
      districtName: '03',
      candidates: [
        {
          number: 1,
          name: {
            label: '王芝安',
            imgSrc: '',
          },
          party: {
            label: '民主進步黨',
            href: '',
          },
          votes: 8170231,
          voteRate: 22.29,
          elected: true,
        },
        {
          number: 2,
          name: {
            label: '王芝安',
            href: '',
            imgSrc: './candidate-3.jpg',
          },
          party: {
            label: '中國國家社會主義勞工黨',
            href: '',
          },
          votes: 70231,
          voteRate: 8.45,
          elected: false,
        },
      ],
    },
  ],
}

root.render(
  <ElectionVotesComparison
    year={2018}
    title="臺北市議員選舉"
    districts={mockData.districts}
  />
)
