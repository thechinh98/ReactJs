import React from "react";
import CustomModal from "../modal/CustomModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from '../../redux/actions';
import "./User.css";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export default function User() {
  const dispatch = useDispatch()
  const [isOpenModal, setisOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [userEdit, setUserEdit] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onClickEdit = (user) => {
    setUserEdit(user)
    setisOpenModal(true);
  };

  const onClickDelete = (id) => {
    dispatch(deleteUser({ id }))
  };

  const handleClose = () => {
    setisOpenModal(false);
  };

  const columns = [
    { id: 'name', label: 'Tên', minWidth: 170 },
    { id: 'userID', label: 'Mã Người dùng', minWidth: 100 },
    {
      id: 'age',
      label: 'Tuổi',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'hometown',
      label: 'Quê quán',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'occupation',
      label: 'Chức vụ',
      minWidth: 170,
      align: 'right',
    },
  ];

  const textSearch = useSelector((state) => state.textSearch)
  const rows = useSelector((state) => state.userList.filter(item => {
    return item.name.includes(textSearch) || item.age.includes(textSearch) || item.userID.includes(textSearch) || item.occupation.includes(textSearch) || item.hometown.includes(textSearch);
  }));

  return (
    <>
      <CustomModal user={userEdit} isOpen={isOpenModal} onClose={handleClose} />
      <>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table className="table" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell
                    key={'edit'}
                    align={'right'}
                    style={{ minWidth: 50 }}
                  >
                    {"Chỉnh sửa"}
                  </TableCell>
                  <TableCell
                    key={'delete'}
                    align={'right'}
                    style={{ minWidth: 50 }}
                  >
                    {"Delete"}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        <TableCell align="right">
                          <IconButton onClick={() => onClickEdit(row)}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton onClick={() => onClickDelete(row.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>

                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </>
    </>
  );
}
