import './App.css';
import 'antd/dist/antd.css';
import DoctorsTable from './components/DoctorsTable/DoctorsTable';
import { Route } from 'react-router';
import { getAsyncDoctors, getAsyncTimeWork } from './redux/thunk/doctorsThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './components/Spinner/Spinner';
import DoctorItem from './components/DoctorItem/DoctorItem';

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
      <Route
        exact
        path='/'
        component={() => <DoctorsTable employees={employees} />}
      />
      <Route
        path='/:id'
        render={({ match }) => {
          const { id } = match.params;
          return <DoctorItem worklog={worklog} id={id} />;
        }}
      />
    </div>
  );
}

export default App;
