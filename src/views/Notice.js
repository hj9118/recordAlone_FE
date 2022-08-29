import React from 'react';
import Layout from './Layout';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Typography,
  Chip,
  Button,
  Grid,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableSample from '../component/TableSample.js';

const Notice = () => {
  return (
    <Layout>
      <Paper
        elevation={0}
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{
          width: '80%',
          margin: 'auto',
          paddingBottom: '5%',
          paddingTop: '2%',
        }}
      >
        <Typography variant='h4' margin={2}>
          공지사항
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Chip label='FAQ' size='small' style={{ marginRight: '5px' }} />
            <Typography>결제 취소는 어떻게 하나요?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              결제 취소는 14일 이내 결제 내역에 한하여 결제 취소가 가능하며,{' '}
              <br />
              결제 취소까지는 영업일 기준 최대 3~5일이 소요됩니다. <br />
              5일 이상 소요 이후에도 결제 취소가 되지 않을경우 1:1 문의 사항에
              문의 부탁드립니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Chip label='FAQ' size='small' style={{ marginRight: '5px' }} />
            <Typography>결제를 했는데 코인이 안들어와요</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              결제 시간과 금액이 포함된 결제 완료 내역을 캡처해주신 후, <br />
              1:1 문의 사항에 문의하시면 조치해드리겠습니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Chip label='공지' size='small' style={{ marginRight: '5px' }} />
            <Typography>개인정보 처리방침</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              실제 서비스 되지 않는 프로젝트 사이트이며, 형식상 맞춰놓은 글
              입니다. <br />
              실제 서비스 될 경우 개인정보 보호법에 의하여 작성되어야 하는
              형식입니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Grid container justifyContent='flex-end'>
          <Link href='/notice/new' underline='none'>
            <Button
              variant='contained'
              style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#7289da' }}
            >
              1:1 문의
            </Button>
          </Link>
        </Grid>
        <TableSample />
      </Paper>
    </Layout>
  );
};

export default Notice;
