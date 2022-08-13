import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { TableHead, Table, TableBody, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel } from '@material-ui/core';
import * as FaIcons from 'react-icons/fa';
import Styled from 'styled-components';
import Popup from '../Component/Popup';
import AvionForm from '../Component/AvionForm';

const TableTool = Styled.div`
    display: flex;
    input {
        width: 60%;
        height: 40px;
        margin: 0;
    }
    justify-content: space-between;
    padding: 10px;
`

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
    newBtn: {
        height: '40px',
        right: '10px',
        margin: '0'
    }
}))

const Avion = () => {
    const classes = useStyles();

    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();
    const [openPopup, setOpenPopup] = useState(false);


    const [avions, setAvions] = useState([]);
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

    const handleSortRequest = cellId => {
        const isAsc = orderBy === cellId && order === "asc";
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(cellId);
    }

    return (
        <>
            <TableTool>
                <input></input>
                <Button
                    className={classes.newBtn}
                    startIcon={<FaIcons.FaPlus />}
                    variant="outlined"
                    color="primary"
                    onClick={() => setOpenPopup(true)}
                >Ajouter nouveau</Button>
            </TableTool>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell key="design">
                            <TableSortLabel
                                active={orderBy === "design"}
                                direction={orderBy === "design" ? order : 'asc'}
                                onClick={() => { handleSortRequest("design") }}
                            >
                                Désignation de l'avion
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="nbPlaces">
                            <TableSortLabel
                                active={orderBy === "nbPlaces"}
                                direction={orderBy === "nbPlaces" ? order : 'asc'}
                                onClick={() => { handleSortRequest("nbPlaces") }}
                            >
                                Nombre de place
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="numVol">
                            <TableSortLabel
                                active={orderBy === "numVol"}
                                direction={orderBy === "numVol" ? order : 'asc'}
                                onClick={() => { handleSortRequest("numVol") }}
                            >
                                Numéro de vol
                            </TableSortLabel>
                        </TableCell>
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
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title="Nouvel Avion"
            >
                <AvionForm />
            </Popup>
        </>
    )
}

export default Avion;