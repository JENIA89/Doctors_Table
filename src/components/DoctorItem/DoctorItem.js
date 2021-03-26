import { Table } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'employee_id',
  },
  {
    title: 'Прибыл',
    dataIndex: 'from',
    align: 'center',
  },
  {
    title: 'Убыл',
    dataIndex: 'to',
    align: 'center',
  },
];

const DoctorItem = ({ worklog, id }) => {
  const data = worklog?.filter((item) => item.employee_id === +id);

  console.log(data);
  return <Table columns={columns} dataSource={data} />;
};

export default DoctorItem;
