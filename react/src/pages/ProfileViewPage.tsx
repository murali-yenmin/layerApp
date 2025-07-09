import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

interface UserProfile {
  username?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  phone?: string;
}

const ProfileViewPage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/profile'); // Assuming /profile returns the current user's profile
        setProfile(response.data);
      } catch (err) {
        console.error('Failed to fetch profile:', err);
        setError('Failed to load profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading profile...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
  }

  if (!profile) {
    return <div className="flex items-center justify-center min-h-screen">No profile data available.</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">User Profile</h3>
        <div className="mt-4">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>First Name:</strong> {profile.firstName || 'N/A'}</p>
          <p><strong>Last Name:</strong> {profile.lastName || 'N/A'}</p>
          <p><strong>Address:</strong> {profile.address || 'N/A'}</p>
          <p><strong>Phone:</strong> {profile.phone || 'N/A'}</p>
        </div>
        <div className="flex justify-end mt-6">
          <Button onClick={() => navigate('/profile/edit')}>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewPage;