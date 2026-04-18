"use client";

import Image from "next/image";

const DocumentsPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/lightempty3.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/darkempty.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">Welcome to Cerebra</h2>
    </div>
  );
};

export default DocumentsPage;
