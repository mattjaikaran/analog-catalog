import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import firebase from '../firebase'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}))

function createData(artistName, albumName, releaseYear, albumRuntime, dateBought, color) {
  return { artistName, albumName, releaseYear, albumRuntime, dateBought, color }
}

const rows = [
  createData('The Beatles', 'Revolver', 1966, '35:01', '05/13/2014', 'White'),
  createData('The Doors', 'Strange Days', 1967, '35:25', '06/25/2015', 'Purple'),
]

const geniusQuery = (artistName, albumName) => {
  const artist = artistName.replace(/\s+/g, '-')
  const album = albumName.replace(/\s+/g, '-')
  return `https://genius.com/albums/${artist}/${album}`
}

export default function All() {
  const classes = useStyles()
  const [values, setValues] = useState({
    vinyls: []
  })

  // useEffect(() => {
  //   const db = firebase.firestore().collection('users').collection('vinyls')
  //   console.log(db)
  // })


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Artist Name</TableCell>
            <TableCell align="right">Album Name</TableCell>
            <TableCell align="right">Release Year</TableCell>
            <TableCell align="right">Album Runtime</TableCell>
            <TableCell align="right">Date Bought</TableCell>
            <TableCell align="right">Lyrics</TableCell>
            <TableCell align="right">Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.albumName}>
              <TableCell component="th" scope="row">
                {row.artistName}
              </TableCell>
              <TableCell align="right">
                {row.albumName}
              </TableCell>
              <TableCell align="right">
                {row.releaseYear}
              </TableCell>
              <TableCell align="right">
                {row.albumRuntime}
              </TableCell>
              <TableCell align="right">
                {row.dateBought}
              </TableCell>
              <TableCell align="right">
                <a href={geniusQuery(row.artistName, row.albumName)} target="_blank" rel="noopener noreferrer">View Lyrics</a>
              </TableCell>
              <TableCell align="right">
                {row.color}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
