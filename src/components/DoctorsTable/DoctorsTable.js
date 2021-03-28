import { Table } from 'antd';
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
    dataIndex: 'myId',
    key: 'myId',
    align: 'center',
    render: (text) => <Link to={`${text.id}`}>{text.firstName}</Link>,
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
    newUser.birthDate = item.birthDate.split('-').reverse().join('.');
    newUser.myId = { id: item.id, firstName: newUser.firstName };
    data.push(newUser);
  });

  return (
    <Table columns={columns} dataSource={data} pagination={false} rowKey='id' />
  );
};

export default DoctorsTable;
