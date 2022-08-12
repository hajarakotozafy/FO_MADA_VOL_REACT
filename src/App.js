import { useEffect, useState } from 'react';
import TableContainer from './Component/useTable';
import axios from 'axios';
import { TableHead, Table, TableBody, TableRow, TableCell } from '@material-ui/core';


const App = () => {
  const [avions, setAvions] = useState([]);

  useEffect(async () => {
    await axios.get('http://localhost:3001/api/avion').then(res => {
      console.log('datas', res.data);
      setAvions(res.data);
    })
  }, [])
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Désignation de l'avion</TableCell>
            <TableCell>Nombre de place</TableCell>
            <TableCell>Numéro de vol</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {avions.map(item => {
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
    </>
  )
}

export default App;