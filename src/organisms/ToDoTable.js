import React from 'react';
import { Trash2, Check, Undo } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UpdateStatus = styled.div`
    color: grey;
    &:hover {
        color: #3318cb;
    }
`

const Delete = styled.div`
    color: grey;
    &:hover {
        color: red;
    }
`

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
`

const Chip = styled.div`
    border-radius: 20px;
    padding: 3px 15px;
    width: fit-content;
    &.high {
        background-color: #ffe0dc;
        color: #ba2916;
    }
    &.medium {
        background-color: #fdefd1;
        color: #8e6300;
    }
    &.low {
        background-color: #cbf2cf;
        color: #364838;
    }
`

export default function ToDoTable({ filteredTodos, todoList, setTodoList }) {
    if (filteredTodos.length > 0) {
        return (
            <TableContainer component={Paper} style={{marginTop: '20px'}}>
                <Table size="small" aria-label="table of to-dos">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>To-Do</strong></TableCell>
                            <TableCell align="left"><strong>Priority</strong></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredTodos.map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            style={{ backgroundColor: row.done && '#f0edff' }}
                            hover
                            >
                                <TableCell component="th" scope="row">
                                    {row.description}
                                </TableCell>
                                <TableCell align="left"><Chip className={row.priority}>{row.priority[0].toUpperCase()+row.priority.slice(1)}</Chip></TableCell>
                                <TableCell align="right">
                            <Controls>
                                <Tooltip title={row.done ? 'Undo' : 'Done'} placement='left'>
                                            <UpdateStatus id='done' onClick={() =>
                                                setTodoList(todoList.map((el) => {
                                                    if (row.id === el.id) {
                                                        return {
                                                            ...el, done: !row.done
                                                        }
                                                    }
                                                    return el
                                                }))
                                            }>
                                                {!row.done ? <Check size={16} /> : <Undo size={16} />}
                                            </UpdateStatus>
                                        </Tooltip>
                                        <Tooltip title='Delete To-do' placement='right'>
                                            <Delete id='delete' onClick={() =>
                                                setTodoList(
                                                    todoList.filter(i =>
                                                        i.id !== row.id
                                                    )
                                                )
                                            }>
                                                <Trash2 size={16} />
                                            </Delete>
                                        </Tooltip>
                                    </Controls>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    } else {
        return (
            <p style={{marginTop: '20px'}}>No items.</p>
        )
    }
}
