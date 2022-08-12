import react from 'react';
import { Table, TableHead, TableCell, TableRow } from '@material-ui/core';

const TableContainer = ({ children, headCells }) => {


    return (
        <Table>
            <TableHead>
                <TableRow>
                    {headCells.map(item => {
                        <TableCell key={item.id}>{item.name}</TableCell>
                    })}
                </TableRow>
            </TableHead>
            {children}
        </Table>
    )
}

export default TableContainer;