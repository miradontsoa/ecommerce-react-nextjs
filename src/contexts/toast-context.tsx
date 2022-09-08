import React, { createContext, useRef } from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import ToastDialog from "components/toast/toast-dialog";
import { Toast } from "bootstrap";
type ToastData = {
  id?: React.Key;
  title?: string;
  message?: string | React.ReactElement;
  variant?: "warning" | "error" | "info";
};
type ToastContextType = {
  showToast: (toastNewData: ToastData) => void;
  showErrorToast: (toastNewData: ToastData) => void;
};

const ToastContext = createContext({} as ToastContextType);
// const ToastContext = createContext({} as any);

const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastData, setToastData] = useState({} as ToastData);
  const [toast, setToast] = useState(null as Toast);
  const toastWarning = useRef();
  useEffect(() => {
    setToast(new Toast(toastWarning.current));
  }, []);
  useEffect(() => {
    if (toast != null) {
      toast.show();
    }
  }, [toastData]);

  const showToast = useCallback(
    (toastNewData: ToastData) => {
      setToastData({ ...toastNewData, variant: "info" });
    },
    [toastData]
  );
  const showErrorToast = useCallback(
    (toastNewData: ToastData) => {
      setToastData({ ...toastNewData, variant: "error" });
    },
    [toastData]
  );

  return (
    <ToastContext.Provider value={{ showToast, showErrorToast }}>
      {children}

      <div className="toast-stack position-fixed bottom-0 end-0 p-3 toast-bottom">
        {toastData && (
          <ToastDialog
            title={toastData.title ? toastData.title : "Information"}
            reference={toastWarning}
            key={toastData.id}
            variant={toastData.variant}
          >
            <p className="p-wrap">{toastData.message}</p>
          </ToastDialog>
        )}
        {/* Toast */}
      </div>
    </ToastContext.Provider>
  );
};
export { ToastContext, ToastContextProvider };
/* ToastContextProvider.propTypes = {
  children: PropTypes.any,
};
 */
