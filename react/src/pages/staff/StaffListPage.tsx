import React, { useEffect, useState } from 'react';
import ReusableTable from '../../components/ReusableTable';
import { Staff } from '../../types/staff';
import { Link } from 'react-router-dom';
import { deleteStaff } from '../../services/staff';
import { fetchStaff } from '../../services/staff'; // Assuming you'll create this service

const StaffListPage: React.FC = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getStaff = async () => {
      try {
        const data = await fetchStaff();
        setStaff(data);
      } catch (err) {
        setError('Failed to fetch staff');
      } finally {
        setLoading(false);
      }
    };

    getStaff();
  }, []);

  const columns = [
    { header: 'Email', accessor: 'email' },
    { header: 'First Name', accessor: 'firstName' },
    { header: 'Last Name', accessor: 'lastName' },
    { header: 'Role', accessor: 'role' },
    {
      header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }: { row: { original: Staff } }) => (
        <div className="flex space-x-2">
          <Link to={`/staff/edit/${row.original._id}`} className="text-blue-500 hover:text-blue-700">Edit</Link>
          <button
            onClick={() => handleDelete(row.original._id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      try {
        await deleteStaff(id);
        setStaff(staff.filter((s) => s._id !== id));
        alert('Staff member deleted successfully!');
      } catch (error) {
        alert('Failed to delete staff member.');
      }
    }
  };

  if (loading) return <div>Loading staff...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Staff List</h1>
      <Link to="/staff/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        Add New Staff
      </Link>
      <ReusableTable data={staff} columns={columns} />
    </div>
  );
};

export default StaffListPage;
