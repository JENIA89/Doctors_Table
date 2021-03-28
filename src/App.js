import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import DoctorsTable from './components/DoctorsTable/DoctorsTable';
import { getAsyncDoctors, getAsyncTimeWork } from './redux/thunk/doctorsThunk';
import Spinner from './components/Spinner/Spinner';
import DoctorItem from './components/DoctorItem/DoctorItem';
import 'antd/dist/antd.css';

function App() {
  const { employees, worklog, loading } = useSelector(({ doctors }) => doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncDoctors());
    dispatch(getAsyncTimeWork());
  }, [dispatch]);

  if (loading) return <Spinner />;
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <DoctorsTable employees={employees} />}
        />
        <Route path='/:id' children={<DoctorItem worklog={worklog} />} />
      </Switch>
    </div>
  );
}

export default App;
