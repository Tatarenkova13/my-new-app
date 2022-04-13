import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
        DataGrid,  
        GridToolbarContainer,
        GridToolbarFilterButton, 
        ruRU
      } from '@mui/x-data-grid';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}


const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  ruRU,
);



const columns = [
  { field: 'id', headerName: 'Номер заявки', width: 120 },
  {
    field: 'costItem',
    headerName: 'Статья расхода',
    type: 'number',
    width: 130,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Дата заявки',
    type: 'date',
    width: 120,
    editable: false,
  },
  {
    field: 'total',
    headerName: 'Сумма',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'project',
    headerName: 'Проект',
    width: 110,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Статус',
    width: 120,
    editable: false,
  },
  {
    field: 'setStatus',
    headerName: 'Действие',
    width: 110,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['Согласовать', 'Отклонить']
  },
];

const rows = [
  { id: 1, costItem: 123, date: '02.03.2021', total: 35000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 2, costItem: 234, date: '13.04.2021', total: 38000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 3, costItem: 124, date: '22.07.2021', total: 20000, project: 'Приложение', status: 'Не согласована', setStatus: 'Согласовать' },
  { id: 4, costItem: 125, date: '05.02.2021', total: 50000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 5, costItem: 126, date: '12.01.2021', total: 60000, project: 'Приложение', status: 'Не согласована', setStatus: 'Согласовать' },
  { id: 6, costItem: 127, date: '16.06.2021', total: 16000, project: 'Приложение', status: 'Отклонена', setStatus: 'Согласовать' },
  { id: 7, costItem: 123, date: '18.02.2021', total: 34000, project: 'Приложение', status: 'Не согласована', setStatus: 'Согласовать' },
  { id: 8, costItem: 134, date: '26.03.2021', total: 40000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 9, costItem: 122, date: '14.06.2021', total: 27000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 10, costItem: 143, date: '09.08.2021', total: 41000, project: 'Приложение', status: 'Отклонена', setStatus: 'Согласовать' },
  { id: 11, costItem: 153, date: '03.12.2021', total: 19000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 12, costItem: 183, date: '02.07.2021', total: 31000, project: 'Приложение', status: 'Отклонена', setStatus: 'Согласовать' },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnMenu
          disableSelectionOnClick
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </ThemeProvider>
    </div>
  );
}
