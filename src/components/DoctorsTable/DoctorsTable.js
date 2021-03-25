import { Table } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'ФИО',
    dataIndex: 'firstName',
    onFilter: (value, record) => record.lastName.indexOf(value) === 0,
    sorter: (a, b) => a.lastName.length - b.lastName.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDate',
  },
];

const DoctorsTable = ({ employees }) => {
  const data = [];

  employees.forEach((item) => {
    const newUser = { ...item };
    newUser.firstName = `${item.lastName} ${item.firstName} ${item.middleName}`;
    newUser.birthDate = moment(item.birthDate).format('YYYY.DD.MM');
    data.push(newUser);
  });

  return <Table columns={columns} dataSource={data} />;
};

export default DoctorsTable;
