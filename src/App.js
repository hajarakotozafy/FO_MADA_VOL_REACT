import { useEffect, useState } from 'react';
import axios from 'axios';
import { TableHead, Table, TableBody, TableRow, TableCell, makeStyles, TablePagination } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}))

const App = () => {
  const [avions, setAvions] = useState([]);
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  useEffect(async () => {
    await axios.get('http://localhost:3001/api/avion').then(res => {
      console.log('datas', res.data);
      setAvions(res.data);
    })
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const recordsAfterPagingAndSorting = () => {
    return avions.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
  }

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Désignation de l'avion</TableCell>
            <TableCell>Nombre de place</TableCell>
            <TableCell>Numéro de vol</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recordsAfterPagingAndSorting().map(item => {
            return (
              <TableRow key={item.numAvion}>
                <TableCell>{item.designation}</TableCell>
                <TableCell>{item.nbPlaces}</TableCell>
                <TableCell>{item.numVol}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={avions.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  )
}

export default App;