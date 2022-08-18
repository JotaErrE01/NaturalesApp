import { Routes, Route, Outlet } from 'react-router-dom';
import { Sidebar } from './';

export const Layout = () => {
  return (
    <div
      className='flex'
    >
      <Sidebar />

      <Outlet />
    </div>
  )
};
