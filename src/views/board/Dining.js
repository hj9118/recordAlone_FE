import React from 'react'
import Layout from '../Layout'
import Paging from '../../component/template/Pagination';
import Menu from '../../component/template/Menu';

const Dining = () => {
  return (
    <Layout>
      <Menu />
    <div>Dining</div>
    <Paging />
    </Layout>
  )
}

export default Dining