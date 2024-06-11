import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import appSlice from './appSlice'
import searchSlice from './searchSlice'

const appStore = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice
    }
})

export default appStore