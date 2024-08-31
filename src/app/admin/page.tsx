import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { DeleteDropDownItem } from "./news/newsActions";

const page = () => {
  return (
    <>
      <div className="p-4 flex items-center gap-4">
        <div className="flex-1">
          <h1 className="font-semibold text-4xl">News</h1>
        </div>
        <div className="">
          <Button asChild>
            <Link href="/admin/news">Add News</Link>
          </Button>
        </div>
      </div>

      <NewsTable />
    </>
  );
};

export default page;

async function NewsTable() {
  const news = await db.news.findMany();

  if (!news.length) return <p>No News found.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Source</TableHead>
          <TableHead className="w-0">
            <span>Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {news.map((news) => (
          <TableRow key={news.id}>
            <TableCell>{news.title}</TableCell>
            <TableCell>{news.description}</TableCell>
            <TableCell>{news.image}</TableCell>
            <TableCell>{news.link}</TableCell>
            <TableCell>{news.source}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-zinc-200 rounded-full p-1">
                  <MoreVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/news/${news.id}/edit`}>Edit</Link>
                  </DropdownMenuItem>
                  <DeleteDropDownItem id={news.id} />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
