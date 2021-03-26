import { Table } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: 40,
  },
  {
    title: 'ФИО',
    dataIndex: 'firstName',
    sorter: (a, b) => a.firstName.length - b.firstName.length,
    render: (text, row, id) => <Link to={`${id + 1}`}>{text}</Link>,
    sortDirections: ['descend', 'ascend'],
    key: 'firstName',
    align: 'center',
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDate',
    key: 'birthDate',
    align: 'center',
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
