import { Suspense, lazy, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { authCurrentThunk } from 'redux/user/user-operations';
// import ModalToggel from './ModalTogel/ModalToggel';
// import ChoosedDay from './ChoosedDay/ChoosedDay';
import { PrivateRoute } from './PrivateRoute';
import Calendar from './сalendar/Calendar';
import CalendarDaysTask from './сalendar/calendarDaysTask/CalendarDaysTask';
import { getCurrentDate } from '../redux/calendar/selectors';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const UserPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authCurrentThunk());
  }, [dispatch]);
  const currentDate = useSelector(getCurrentDate);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Suspense>
        <Routes>
          <Route path="/welcome" index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo={`/calendar/month/${currentDate.slice(0,7)}`} component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo={`/calendar/month/${currentDate.slice(0,7)}`}
                component={<RegisterPage />}
              />
            }
          />
          <Route path="/" element={<PrivateRoute redirectTo ="/welcome" component={<MainPage/>} />}>
            <Route path="user" element={<UserPage />} />
            <Route
              path="calendar"
              element={
                <div>
                  <h1>То что делает ваня</h1>
                  <Outlet />
                </div>
              }
            >
              <Route
                path="month/:currentDate"
                element={<Calendar/>}
              />
              <Route
                path="day/:currentDay"
                element={<CalendarDaysTask/>}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
