import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';
import { CalendarArrowDown, CalendarArrowUp, ListFilter } from 'lucide-react';
import Popper from '@mui/material/Popper';

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
`

const FilterOptions = styled.div`
    border: solid 1px grey;
    border-radius: 5px;
    padding: 5px;
    margin-left: 5px;
    background-color: white;
`

const FilterOption = styled.div`
    cursor: default;
    color: ${props => props.active ? '#3318cb' : 'grey'};
    &:hover {
        color: #3318cb;
    }
`

export default function SortAndFilter({todoList, setTodoList, isChronological, setIsChonological, status, setStatus}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <Controls>
            <Tooltip title='Toggle Order of To-Dos' placement='top'>
                <Button className='secondary' onClick={()  => {
                    const nextList = [...todoList];
                    nextList.sort((a, b) => !isChronological ? a.id - b.id : b.id - a.id)
                    setTodoList(nextList);
                    setIsChonological(!isChronological);
                }}>
                    {isChronological ? <CalendarArrowDown size={15} /> : <CalendarArrowUp size={15} /> }
                    Latest To-Dos
                </Button>
            </Tooltip>
            <Tooltip title='Filter To-Dos' placement='top'>
            <Button className='tertiary' aria-describedby={id} onClick={handleClick}>
                <ListFilter size={15} />
                Filter
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl} placement='right-start'>
                <FilterOptions>
                    <FilterOption active={status === 'all'} onClick={() => setStatus("all")}>All</FilterOption>
                    <FilterOption active={status === 'completed'} onClick={() => setStatus("completed")}>Completed</FilterOption>
                    <FilterOption active={status === 'uncompleted'} onClick={() => setStatus("uncompleted")}>Uncompleted</FilterOption>
                    <FilterOption active={status === 'high'} onClick={() => setStatus("high")}>High</FilterOption>
                    <FilterOption active={status === 'medium'} onClick={() => setStatus("medium")}>Medium</FilterOption>
                    <FilterOption active={status === 'low'} onClick={() => setStatus("low")}>Low</FilterOption>
                </FilterOptions>
            </Popper>
            </Tooltip>
        </Controls>
    )
}

