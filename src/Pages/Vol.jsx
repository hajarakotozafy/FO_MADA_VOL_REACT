import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { TableHead, Table, TableBody, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel } from '@material-ui/core';
import * as FaIcons from 'react-icons/fa';
import Styled from 'styled-components';
import Popup from '../Component/Popup';
import VolForm from '../Component/VolForm';

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
            color: 'white',
            backgroundColor: theme.palette.primary.main,
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
    },
    editBtn: {
        height: '30px',
        width: '30px',
        backgroundColor: theme.palette.primary.main,
        padding: '5px',
        margin: '0px 5px',
        color: 'white'
    },
    deleteBtn: {
        height: '30px',
        width: '30px',
        backgroundColor: theme.palette.error.main,
        padding: '5px',
        margin: '0px 5px',
        color: 'white'
    }
}))

const Vol = () => {
    const classes = useStyles();

    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [vol, setVol] = useState([]);
    const getData = async () => {
        await axios.get('http://localhost:3001/api/vol').then(res => {
            console.log('datas', res.data);
            setVol(res.data);
        })
    }

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            window.location.href = "/login";
        }
    })

    useEffect(() => {
        getData();
    }, [openPopup, vol])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const recordsAfterPagingAndSorting = () => {
        return vol.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    const handleSortRequest = cellId => {
        const isAsc = orderBy === cellId && order === "asc";
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(cellId);
    }

    const openInPopup = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/vol/${id}`)
            .then(res => {

            })
            .catch(err => {

            })
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <TableTool>
                {/* <input></input> */}
                <Button
                    className={classes.newBtn}
                    startIcon={<FaIcons.FaPlus />}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        setOpenPopup(true);
                        setRecordForEdit(null);
                    }}
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
                                Ville De Départ
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="nbPlaces">
                            <TableSortLabel
                                active={orderBy === "nbPlaces"}
                                direction={orderBy === "nbPlaces" ? order : 'asc'}
                                onClick={() => { handleSortRequest("nbPlaces") }}
                            >
                                Ville D'Arrivé
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="numVol">
                            <TableSortLabel
                                active={orderBy === "numVol"}
                                direction={orderBy === "numVol" ? order : 'asc'}
                                onClick={() => { handleSortRequest("numVol") }}
                            >
                                Heure De Départ
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="numVol">
                            <TableSortLabel
                                active={orderBy === "numVol"}
                                direction={orderBy === "numVol" ? order : 'asc'}
                                onClick={() => { handleSortRequest("numVol") }}
                            >
                                Frais
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="actions">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recordsAfterPagingAndSorting().map(item => {
                        return (
                            <TableRow key={item.numVol}>
                                <TableCell>{item.villeDepart}</TableCell>
                                <TableCell>{item.villeArrivee}</TableCell>
                                <TableCell>{item.heureDepart}</TableCell>
                                <TableCell>{item.frais}</TableCell>
                                <TableCell>
                                    <Button onClick={() => openInPopup(item)} className={classes.editBtn} variant="contained"><FaIcons.FaEdit /></Button>
                                    <Button onClick={() => handleDelete(item.numVol)} className={classes.deleteBtn} variant="contained"><FaIcons.FaTrash /></Button>
                                </TableCell>
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
                count={vol.length}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title="Formulaire de vol"
            >
                <VolForm recordForEdit={recordForEdit} setOpenPopup={setOpenPopup} />
            </Popup>
        </div>
    )
}

export default Vol;