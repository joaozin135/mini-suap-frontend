export function TableTop() {
  return (
    <table className="bg-white rounded-xl size-full overflow-auto">
      <tr className="w-full flex">
        <td className="p-4 max-w-24 flex shrink-0 w-full ">Id</td>
        <td className="p-4 max-w-md flex shrink-0 w-full">Titulo</td>
        <td className="p-4 max-w-48 flex shrink-0 w-full">Status</td>
        <td className="p-4 max-w-48 flex shrink-0 w-full">Ação</td>
      </tr>
    </table>
  );
}
