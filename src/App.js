import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import logo from './logo.svg'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './App.css'
import HomePage from './Page/Home'
import Routes from '../Router/Route'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1
  }
})

export default function App () {
  const classes = useStyles()
  const routeResult = useRoutes(Routes)
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            martin chu
          </Typography>
        </Toolbar>
      </AppBar>
      <HomePage/>
    </div>
  )
}
