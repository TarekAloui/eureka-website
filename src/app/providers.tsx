"use client"
import {ThemeProvider} from 'next-themes'
import React from 'react'
import type {FC} from 'react'

interface Props {
    children: React.ReactNode
}

const themeProvider = ({children}: Props) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default themeProvider