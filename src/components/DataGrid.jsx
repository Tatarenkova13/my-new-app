import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Номер заявки', width: 110 },
  {
    field: 'costItem',
    headerName: 'Статья расхода',
    type: 'number',
    width: 130,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Дата заявки',
    width: 120,
    editable: true,
  },
  {
    field: 'total',
    headerName: 'Сумма',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'project',
    headerName: 'Проект',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Статус',
    width: 120,
    editable: true,
  },
  {
    field: 'setStatus',
    headerName: 'Действие',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, costItem: 123, date: '02.03.2021', total: 30000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 2, costItem: 234, date: '13.04.2021', total: 30000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 3, costItem: 124, date: '22.07.2021', total: 30000, project: 'Приложение', status: 'Не согласована', setStatus: 'Согласовать' },
  { id: 4, costItem: 125, date: '05.02.2021', total: 30000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 5, costItem: 126, date: '12.01.2021', total: 30000, project: 'Приложение', status: 'Не согласована', setStatus: 'Согласовать' },
  { id: 6, costItem: 127, date: '16.06.2021', total: 30000, project: 'Приложение', status: 'Отклонена', setStatus: 'Согласовать' },
  { id: 7, costItem: 123, date: '18.02.2021', total: 30000, project: 'Приложение', status: 'Не согласована', setStatus: 'Согласовать' },
  { id: 8, costItem: 134, date: '26.03.2021', total: 30000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 9, costItem: 122, date: '14.06.2021', total: 30000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 10, costItem: 143, date: '09.08.2021', total: 30000, project: 'Приложение', status: 'Отклонена', setStatus: 'Согласовать' },
  { id: 11, costItem: 153, date: '03.12.2021', total: 30000, project: 'Приложение', status: 'Согласована', setStatus: 'Согласовать' },
  { id: 12, costItem: 183, date: '02.07.2021', total: 30000, project: 'Приложение', status: 'Отклонена', setStatus: 'Согласовать' },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        disableSelectionOnClick
      />
    </div>
  );
}
