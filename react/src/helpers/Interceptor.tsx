import api from "../services/api";
import { useEffect, useState } from "react";
import React from "react";
import { CoreModal } from '../components/Modal/CoreModal';
import InternalServerError from '../assets/InternalServerError';
import PageNotFound from '../assets/PageNotFound';
import Button from '../components/common/Button';
import { useAuth } from "../hooks/react-hooks";
import { logout } from "../store/auth/slice/authSlice";

export const Interceptor = ({
  logoutTimer = 60,
}: {
  logoutTimer?: number;
}) => {
  const { dispatch } = useAuth();
  const [internalModal, setInternalModal] = useState(false);
  const [pageNotFoundModal, setPageNotFoundModal] = useState(false);
  const [timer, setTimer] = useState(logoutTimer);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (internalModal) {
      intervalId = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [internalModal]);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error?.response?.status;
        if (status === 403) {
          dispatch(logout());
        } else if (status === 401) {
          dispatch(logout());
        } else if (status === 500) {
          setInternalModal(true);
        } else if (status === 404) {
          setPageNotFoundModal(true);
        }

        return Promise.reject(error);
      }
    );

    // Cleanup interceptor when component unmounts
    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, []);

  useEffect(() => {
    if (internalModal && timer === 0) {
      dispatch(logout());
    }
  }, [timer, internalModal]);

  return (
    <>
      {internalModal && (
        <div className="interceptor-modal">
          <CoreModal
            size="md"
            enableFooter={false}
            enableHeader={false}
            closeModal={() => setInternalModal(false)}
          >
            <div className="image-container">
              <InternalServerError />
            </div>
            <p className="text">Internal Server Error</p>
            <Button onClick={() => dispatch(logout())} isLoading={timer > 0}>
              Logout ({timer})
            </Button>
          </CoreModal>
        </div>
      )}

      {pageNotFoundModal && (
        <div className="interceptor-modal">
          <CoreModal
            size="md"
            enableHeader={false}
            enableFooter={false}
            closeModal={() => setPageNotFoundModal(false)}
          >
            <div className="image-container">
              <PageNotFound />
              <p className="close" onClick={() => setPageNotFoundModal(false)}>
                &times;
              </p>
            </div>
            <p className="text">Page Not Found</p>
          </CoreModal>
        </div>
      )}
    </>
  );
};
