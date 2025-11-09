"use client";

import dynamic from "next/dynamic";
import React, { useMemo, useRef } from "react";
import { useMutation, useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import Cover from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import { Editor } from "@/components/editor";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: Id<"documents">;
  }>;
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const { documentId } = React.use(params);

  // dynamic(..., { ssr: false }) → Prevents SSR and lazy-loads your editor to avoid hydration/window errors. eg: “window is not defined” errors during SSR
  // useMemo around dynamic() → Keeps the same editor component instance between renders, so it doesn’t reset on every state change.
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    []
  );

  const update = useMutation(api.documents.update);
  const document = useQuery(api.documents.getById, {
    documentId,
  });

  console.log("==>>> document", document);

  const saveTimer = useRef<number | null>(null);
  const lastSaved = useRef<string | null>(null);

  const onChange = (content: string) => {
    // Avoid writing identical content repeatedly
    if (lastSaved.current === content) return;

    if (saveTimer.current) {
      window.clearTimeout(saveTimer.current);
    }
    saveTimer.current = window.setTimeout(async () => {
      lastSaved.current = content;
      await update({ id: documentId, content });
    }, 800); // 800–1200ms feels nice
  };

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="w-14 w-[50%]" />
            <Skeleton className="w-4 w-[80%]" />
            <Skeleton className="w-4 w-[40%]" />
            <Skeleton className="w-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40">
      <Cover preview url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar preview initialData={document} />
        <Editor
          editable={false}
          onChange={onChange}
          initialContent={document.content}
          docKey={documentId}
        />
      </div>
    </div>
  );
};

export default DocumentIdPage;
