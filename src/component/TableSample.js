import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('미답변', 1, '문의드립니다.', '익명', '2022.08.24'),
  createData('미답변', 2, '환불요청건', '익명', '2022.08.24'),
  createData('미답변', 3, '기타', '익명', '2022.08.22'),
  createData('답변완료', 4, '결제취소', 'abc***', '2022.08.20'),
  createData('미답변', 5, '환불문의', '익명', '2022.08.19'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} marginTop='10%'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>답변여부</TableCell>
            <TableCell align='center'>문의 번호</TableCell>
            <TableCell align='center'>제목</TableCell>
            <TableCell align='center'>작성자</TableCell>
            <TableCell align='center'>작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell align='center'>{row.calories}</TableCell>
              <TableCell align='center'>{row.fat}</TableCell>
              <TableCell align='center'>{row.carbs}</TableCell>
              <TableCell align='center'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
