import { getStaticSchedule } from '@/lib/getStatic/getStaticSchedule'
import { getStaticPathsSchedule } from '@/lib/getStatisPaths/getStaticPathsSchedule'
import { Schedule } from '@/screens'
import { InferGetStaticPropsType } from 'next'
import React from 'react'

const SchedulePage = ({
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Schedule user={{ user }} />
}

export default SchedulePage

export const getStaticPaths = getStaticPathsSchedule
export const getStaticProps = getStaticSchedule
