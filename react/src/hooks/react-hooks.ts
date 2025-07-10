import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  return { dispatch, authState };
};

// Add other custom hooks for API interaction and store data here
