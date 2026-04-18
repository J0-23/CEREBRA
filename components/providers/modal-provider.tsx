"use client";

import { useSyncExternalStore } from "react";
import { SettingsModal } from "../modals/settings-modal";
import CoverImageModal from "../modals/cover-image-modal";

const useHydrated = () => {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
};

const ModalProvider = () => {
  const isHydrated = useHydrated();

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};

export default ModalProvider;
