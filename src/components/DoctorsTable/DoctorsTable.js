import { Table } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (id) => <Link to={`${id}`}>{id}</Link>,
  },
  {
    title: 'ФИО',
    dataIndex: 'firstName',
    sorter: (a, b) => a.firstName.length - b.firstName.length,
    sortDirections: ['descend', 'ascend'],
    key: 'firstName',
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDate',
    key: 'birthDate',
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
