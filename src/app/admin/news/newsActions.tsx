"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { deleteNews } from "./_action/news";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  disabled?: boolean;
}

export function DeleteDropDownItem({ id, disabled }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      disabled={isPending || disabled}
      onClick={() => {
        if (window.confirm("Are you sure you want to delete ?")) {
          startTransition(async () => {
            await deleteNews(id);
            router.refresh();
          });
        }
      }}
      className="text-red-500 hover:bg-red-500 hover:text-white"
    >
      Delete
    </DropdownMenuItem>
  );
}
