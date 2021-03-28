import { Table, Typography } from 'antd';
import { useParams } from 'react-router';
import { getBreackRules } from '../Helpers/helpers';

const { Text } = Typography;

const DoctorItem = ({ worklog }) => {
  let { id } = useParams();
  const data = worklog
    .filter((item) => item.employee_id === +id)
    .map((item) => ({
      ...item,
      myId: { id: item.id, to: item.to },
    }));

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
      dataIndex: 'myId',
      align: 'center',
      render: (text) => (
        <Text type={getBreackRules(worklog, text.id)}>{text.to}</Text>
      ),
    },
  ];
  return (
    <Table columns={columns} dataSource={data} pagination={false} rowKey='id' />
  );
};

export default DoctorItem;
