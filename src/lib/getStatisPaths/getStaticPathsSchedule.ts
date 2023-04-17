import { GetStaticPaths } from 'next'

export const getStaticPathsSchedule: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
