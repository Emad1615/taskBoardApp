import { LuChevronsRight } from 'react-icons/lu';
import { LuChevronsLeft } from 'react-icons/lu';
import { FaRegCircleDot } from 'react-icons/fa6';

function MultiSelector({
  nonSelectedData = [],
  selectedData = [],
  setNonSelectedData,
  setSelectedData,
}) {
  function addNonSelectedToSelected(item) {
    const nonSelected = nonSelectedData.filter((x) => x.id !== item.id);
    const selected = [...selectedData, item];
    setNonSelectedData(nonSelected.sort((x, y) => x.tag.localeCompare(y.tag)));
    setSelectedData(selected.sort((x, y) => x.tag.localeCompare(y.tag)));
  }
  function addSelectedToNonSelected(item) {
    const nonSelected = [...nonSelectedData, item];
    const selected = selectedData.filter((x) => x.id !== item.id);
    setNonSelectedData(nonSelected.sort((x, y) => x.tag.localeCompare(y.tag)));
    setSelectedData(selected.sort((x, y) => x.tag.localeCompare(y.tag)));
  }
  function addAllNonSelectedToSelected() {
    const nonSelected = [];
    const selected = [...selectedData, ...nonSelectedData];
    setNonSelectedData(nonSelected.sort((x, y) => x.tag.localeCompare(y.tag)));
    setSelectedData(selected.sort((x, y) => x.tag.localeCompare(y.tag)));
  }
  function addAllSelectedToNonSelected() {
    const nonSelected = [...nonSelectedData, ...selectedData];
    const selected = [];
    setNonSelectedData(nonSelected.sort((x, y) => x.tag.localeCompare(y.tag)));
    setSelectedData(selected.sort((x, y) => x.tag.localeCompare(y.tag)));
  }
  return (
    <>
      <h5 className="text-center text-sm font-semibold text-slate-400">Tags</h5>
      <div className="flex  flex-row items-center justify-center gap-4 ">
        <ul className=" h-60 w-1/3 overflow-auto rounded-sm border-2 border-slate-700 bg-slate-600 p-3 shadow-2xl">
          {nonSelectedData.length === 0 && (
            <p className="text-center text-slate-300">All data selected</p>
          )}
          {nonSelectedData.map((item, idx) => (
            <li
              onClick={() => addNonSelectedToSelected(item)}
              key={idx}
              className="text-truncate m-1 cursor-pointer rounded-sm bg-slate-800 p-2 transition-all ease-in hover:translate-x-2 hover:bg-slate-900"
            >
              # {item.tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => addAllNonSelectedToSelected()}
            className="rounded bg-slate-900 pb-3 pl-4 pr-4 pt-3 transition-all ease-in hover:bg-slate-950"
          >
            <LuChevronsRight />
          </button>
          <FaRegCircleDot />
          <button
            type="button"
            onClick={() => addAllSelectedToNonSelected()}
            className="rounded bg-slate-900 pb-3 pl-4 pr-4 pt-3 transition-all ease-in hover:bg-slate-950"
          >
            <LuChevronsLeft />
          </button>
        </div>
        <ul className=" h-60 w-1/3 overflow-auto rounded  border-2 border-slate-700 bg-slate-600 p-3 shadow-2xl">
          {selectedData.length === 0 && (
            <p className="text-center text-slate-300">No selected data</p>
          )}
          {selectedData.map((item, idx) => (
            <li
              onClick={() => addSelectedToNonSelected(item)}
              key={idx}
              className="text-truncate m-1 cursor-pointer rounded-sm bg-slate-800 p-2 transition-all ease-in hover:-translate-x-1 hover:bg-slate-900"
            >
              {item.tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MultiSelector;
