import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  getKeyValue,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

export default function LoadMoreTable() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const list = useAsyncList<Person, { column: string; direction: "ascending" | "descending" }>({
    async load({ signal }) {
      const res = await fetch("https://swapi.py4e.com/api/people/?search", {
        signal,
      });
      const json = await res.json();
      setIsLoading(false);

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a:Person, b: Person) => {
          const first = a[sortDescriptor.column as keyof Person] as any;
          const second = b[sortDescriptor.column as keyof Person] as any;
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label="Example table with client-side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      classNames={{
        table: "min-h-[400px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name" allowsSorting>
          Name
        </TableColumn>
        <TableColumn key="height" allowsSorting>
          Height
        </TableColumn>
        <TableColumn key="mass" allowsSorting>
          Mass
        </TableColumn>
        <TableColumn key="birth_year" allowsSorting>
          Birth year
        </TableColumn>
      </TableHeader>
      <TableBody
        items={list.items}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey as keyof Person)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
