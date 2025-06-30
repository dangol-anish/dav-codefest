"use client";

import React, { createContext, useContext, useState } from "react";

interface QRFocusContextType {
  qrFocused: boolean;
  setQRFocused: (value: boolean) => void;
}

const QRFocusContext = createContext<QRFocusContextType | undefined>(undefined);

export const QRFocusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [qrFocused, setQRFocused] = useState(false);
  return (
    <QRFocusContext.Provider value={{ qrFocused, setQRFocused }}>
      {children}
    </QRFocusContext.Provider>
  );
};

export function useQRFocus() {
  const context = useContext(QRFocusContext);
  if (!context) {
    throw new Error("useQRFocus must be used within a QRFocusProvider");
  }
  return context;
}
